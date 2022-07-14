import { ISessionRepository } from '../__types__';
import { SessionEntity } from '../entities';
import { Repository } from 'typeorm';
export declare class SessionRepository implements ISessionRepository {
    private readonly _sessionEntity;
    constructor(sessionEntity: Repository<SessionEntity>);
}
