import { ISessionService, TokenJWT } from '../__types__';
import { SessionRepository } from '../repositories';
import { UserId } from '../../features/user/__types__';
export declare class SessionService implements ISessionService {
    private readonly _sessionRepository;
    constructor(sessionRepository: SessionRepository);
    refresh(userId: UserId): Promise<TokenJWT>;
}
