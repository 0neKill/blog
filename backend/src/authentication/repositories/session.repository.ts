import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { SessionEntity } from '../entities';

@Injectable()
export class SessionRepository {

    private readonly _sessionEntity: Repository<SessionEntity>;

    constructor(@InjectRepository(SessionEntity) sessionEntity: Repository<SessionEntity>) {
        this._sessionEntity = sessionEntity;
    }


    public async create(data: Partial<SessionEntity>): Promise<SessionEntity> {
        return await this._sessionEntity.save(data);
    }

    public async remove(field: Partial<SessionEntity>): Promise<boolean> {
        return this._sessionEntity.delete(field).then(data => !!data.affected);
    }

    public async update(field: Partial<SessionEntity>, options: Partial<SessionEntity>): Promise<boolean> {
        return !!await this._sessionEntity.update(field, options);
    }

    public async findAll(options: Partial<SessionEntity>): Promise<SessionEntity[]> {
        return await this._sessionEntity.find({ where: options });
    }

    public async findOne(options: Partial<SessionEntity> | Partial<SessionEntity>[]): Promise<SessionEntity> {
        return await this._sessionEntity.findOne({ where: options });
    }


}
