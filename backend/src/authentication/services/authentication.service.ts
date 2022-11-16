import { Injectable } from '@nestjs/common';

import { AuthenticationRepository } from '../repositories';
import { AuthenticationEntity } from '../entities';

import { UserService } from '../../features/user/service';
import { CryptographyService } from './cryptography.service';
import { SessionService } from './session.service';

import {
    AuthenticationDtoForValidate,
    Password,
    RegisterDto, TokenJWT,
} from '../__types__';
import { User, UserId } from '../../features/user/__types__';


@Injectable()
export class AuthenticationService {

    private readonly _authenticationRepository: AuthenticationRepository;
    private readonly _cryptographyService: CryptographyService;
    private readonly _sessionService: SessionService;
    private readonly _userService: UserService;

    constructor(
        authenticationRepository: AuthenticationRepository,
        cryptographyService: CryptographyService,
        sessionService: SessionService,
        userService: UserService,
    ) {
        this._authenticationRepository = authenticationRepository;
        this._cryptographyService = cryptographyService;
        this._sessionService = sessionService;
        this._userService = userService;
    }

    public async registration(candidateData: RegisterDto): Promise<boolean> {
        const { password, ...candidate } = candidateData;
        const authentication = await this._createDataForUser(password);
        await this._userService.create({
            name: candidate.user_name, email: candidate.email, authentication: authentication,
        });
        return true;
    }

    public async authentication(candidateId: UserId): Promise<TokenJWT> {
        return await this._sessionService.createSession(candidateId);
    }

    public async getCandidateAfterVerification(candidateData: AuthenticationDtoForValidate): Promise<User | null> {
        const candidate = await this._userService.getExistUserBy({
            email: candidateData.email,
        });
        return await this._getCandidateOrNull(candidate, candidateData.password);
    }

    private async _getCandidateOrNull(candidate: User, password: Password): Promise<User | null> {
        if (candidate && await this._isCorrectPassword(password, candidate.authentication.password)) {
            return candidate;
        }
        return null;
    }

    private async _isCorrectPassword(passwordFromDto: Password, candidatePassword: Password): Promise<boolean> {
        return await this._cryptographyService.isEqualHash(passwordFromDto, candidatePassword);
    }

    private async _createDataForUser(password: Password): Promise<AuthenticationEntity> {
        const passwordHash = await this._cryptographyService.hashing(password);
        return await this._authenticationRepository.create(passwordHash);
    }


}