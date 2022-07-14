import { UserId } from '../../../features/user/__types__';
import { TokenJWT } from './authentication';
interface Session {
    refresh(userId: UserId): Promise<TokenJWT>;
}
export declare type ISessionController = Session;
export interface ISessionService extends Session {
}
export {};
