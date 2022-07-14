import { ISessionController, TokenJWT } from '../__types__';
import { UserId } from '../../features/user/__types__';
import { SessionService } from '../services';
export declare class SessionController implements ISessionController {
    private readonly _sessionService;
    constructor(sessionService: SessionService);
    refresh(userId: UserId): Promise<TokenJWT>;
}
