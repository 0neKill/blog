import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from '../entity';

import { DataForCreate, FieldBySearch, IUserRepository } from '../__types__/interfaces';


@Injectable()
export class UserRepository implements IUserRepository {
    private readonly _userEntity: Repository<UserEntity>;

    constructor(@InjectRepository(UserEntity) userEntity: Repository<UserEntity>) {
        this._userEntity = userEntity;
    }

    async insert(user: DataForCreate): Promise<UserEntity> {
        return await this._userEntity.save({
            name: user.name,
            email: user.email,
            authentication: user.authentication,
        });
    }

    async getUserBy(field: FieldBySearch): Promise<UserEntity> {
        return await this._userEntity.findOne({ where: field, relations: ['authentication'] });
    }

}