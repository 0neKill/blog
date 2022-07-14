import { Injectable } from '@nestjs/common';
import { ISessionService, TokenJWT } from '../__types__';
import { SessionRepository } from '../repositories';
import { UserId } from '../../features/user/__types__';

@Injectable()
export class SessionService implements ISessionService {
    private readonly _sessionRepository: SessionRepository;

    constructor(sessionRepository: SessionRepository) {
        this._sessionRepository = sessionRepository;
    }

    refresh(userId: UserId): Promise<TokenJWT> {
        return Promise.resolve(undefined);
    }
}