import { Injectable } from '@nestjs/common';
import { ISessionRepository } from '../__types__';
import { SessionEntity } from '../entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SessionRepository implements ISessionRepository {

    private readonly _sessionEntity: Repository<SessionEntity>;

    constructor(@InjectRepository(SessionEntity) sessionEntity: Repository<SessionEntity>) {
        this._sessionEntity = sessionEntity;
    }
}