import { Injectable } from '@nestjs/common';
import { JsonWebTokenError, sign, SignOptions, TokenExpiredError, verify } from 'jsonwebtoken';
import { v4 as uuidV4 } from 'uuid';


import { TokenJWT } from '../__types__';
import { UserId } from '../../features/user/__types__';
import { ConfigService } from '@nestjs/config';
import { JsonWebTokenConfiguration, OptionJWT, TokenType } from '../../core/config/json-web-token';

export type SessionId = string;


interface PayloadJWT {
    id: SessionId,
    type: TokenType,
    userId: UserId,
}

interface PayloadAndOptions {
    payload: PayloadJWT,
    options: SignOptions,
}

type AccessAndRefresh = Record<keyof TokenJWT, { token: string, token_id: string }>
export type NameTokens = keyof Pick<JsonWebTokenConfiguration, 'access_token' | 'refresh_token'>;

@Injectable()
export class JsonWebTokenService {
    private readonly _configService: ConfigService;
    private readonly _publicKey: Buffer;
    private readonly _privateKey: Buffer;

    constructor(configService: ConfigService) {
        this._configService = configService;
        this._publicKey = configService.get('jsonwebtoken.public_key');
        this._privateKey = configService.get('jsonwebtoken.private_key');
    }


    public verifyToken(token: string): PayloadJWT {
        try {
            return verify(token, this._privateKey) as PayloadJWT;
        } catch (e) {
            if (e instanceof TokenExpiredError) {
                throw new Error('Токен неактивен!');
            } else if (e instanceof JsonWebTokenError) {
                throw new Error('Что-то пошло не так!');
            }
        }
    }

    public isTokenEqualByType(tokenType: TokenType, typeCheck: NameTokens): boolean {
        return tokenType === this._configService.get(`jsonwebtoken[${typeCheck}].token`);
    }


    public getAccessAndRefreshToken(userId: UserId): AccessAndRefresh {
        const access_token = this._createAccessToken(userId);
        const refresh_token = this._createRefreshToken(userId);
        return { access_token, refresh_token };
    }

    private _createAccessToken(userId: UserId): { token: string, token_id: string } {
        const accessTokenOption = this._configService.get('jsonwebtoken.access_token');
        return this._getTokenAfterSing(accessTokenOption, userId);
    }


    private _createRefreshToken(userId: UserId): { token: string, token_id: string } {
        const refreshTokenOption = this._configService.get('jsonwebtoken.refresh_token');
        return this._getTokenAfterSing(refreshTokenOption, userId);
    }


    private _getTokenAfterSing(optionJwt: OptionJWT, userId: UserId): { token: string, token_id: string } {
        const { payload, options } = JsonWebTokenService._builderPayloadAndConfig(optionJwt, userId);
        return {
            token_id: payload.id,
            token: sign(payload, this._privateKey, options),
        };
    };

    private static _builderPayloadAndConfig(optionJwt: OptionJWT, userId: UserId): PayloadAndOptions {
        return {
            payload: JsonWebTokenService._generatePayload(optionJwt.token, userId),
            options: JsonWebTokenService._generateOptions(optionJwt.expiresIn),
        };
    }


    private static _generatePayload(tokenType: TokenType, userId: UserId): PayloadJWT {
        return { id: uuidV4(), type: tokenType, userId: userId };
    }

    private static _generateOptions(expiresIn: SignOptions['expiresIn']): SignOptions {
        return { expiresIn: expiresIn };
    }


}