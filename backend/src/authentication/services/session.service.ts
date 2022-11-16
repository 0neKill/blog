import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { SessionRepository } from '../repositories';

import { TokenJWT } from '../__types__';
import { UserId } from '../../features/user/__types__';
import { JsonWebTokenService, SessionId } from './json-web-token.service';

@Injectable()
export class SessionService {
    private readonly _sessionRepository: SessionRepository;
    private readonly _jsonWebTokenService: JsonWebTokenService;
    private readonly _configService: ConfigService;

    constructor(sessionRepository: SessionRepository, jsonWebTokenService: JsonWebTokenService, configService: ConfigService) {
        this._sessionRepository = sessionRepository;
        this._jsonWebTokenService = jsonWebTokenService;
        this._configService = configService;
    }

    public async refresh(userId: UserId, refreshToken: string): Promise<TokenJWT> {
        console.log(refreshToken);
        return await this._getTokensAfterOperation(userId, refreshToken);
    }

    public async createSession(userId: UserId): Promise<TokenJWT> {
        return await this._getTokensAfterOperation(userId);
    }

    public async isSessionExists(sessionId: SessionId): Promise<boolean> {
        return !!await this._sessionRepository.findOne([{ access_id: sessionId }, { refresh_id: sessionId }]);
    }


    private async _getTokensAfterOperation(userId: UserId, refreshToken?: string): Promise<TokenJWT> {
        if (await this._isSessionExpire(userId) && !refreshToken) {
            await this._removeAllSessionByUserId(userId);
        }
        const { access_token, refresh_token } = await this._saveSession(userId, refreshToken);

        return {
            refresh_token, access_token,
        };
    }

    private async _saveSession(userId, refreshToken?: string): Promise<TokenJWT> {
        const { access_token, refresh_token } = this._jsonWebTokenService.getAccessAndRefreshToken(userId);
        await (!refreshToken ? this._sessionRepository.create({
            user_id: userId,
            access_id: access_token.token_id,
            refresh_id: refresh_token.token_id,
        }) : this._sessionRepository.update({ user_id: userId, refresh_id: refreshToken }, {
            access_id: access_token.token_id,
            refresh_id: refresh_token.token_id,
        }));
        return {
            access_token: access_token.token,
            refresh_token: refresh_token.token,
        };
    }


    private async _isSessionExpire(userId: UserId): Promise<boolean> {
        const sessions = await this._sessionRepository.findAll({ user_id: userId });
        return sessions.length >= this._configService.get('session.total');
    }

    private async _removeAllSessionByUserId(userId: UserId): Promise<boolean> {
        return this._sessionRepository.remove({ user_id: userId });
    }


}