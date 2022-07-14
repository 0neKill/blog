import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { AuthenticationEntity } from '../entities';

import { IAuthenticationRepository, Password } from '../__types__';

@Injectable()
export class AuthenticationRepository implements IAuthenticationRepository {
    private readonly _authenticationEntity: Repository<AuthenticationEntity>;

    constructor(@InjectRepository(AuthenticationEntity) authenticationEntity: Repository<AuthenticationEntity>) {
        this._authenticationEntity = authenticationEntity;
    }

    async create(password: Password): Promise<AuthenticationEntity> {
        return await this._authenticationEntity.save({ password });
    }
}