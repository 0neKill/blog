import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from '../entity';
import { DataForCreate, FieldBySearch } from '../__types__';


@Injectable()
export class UserRepository {
    private readonly _userEntity: Repository<UserEntity>;

    constructor(@InjectRepository(UserEntity) userEntity: Repository<UserEntity>) {
        this._userEntity = userEntity;
    }

    public async insert(user: DataForCreate): Promise<UserEntity> {
        return await this._userEntity.save({
            name: user.name,
            email: user.email,
            authentication: user.authentication,
        });
    }

    public async getUserBy(field: FieldBySearch): Promise<UserEntity> {
        return await this._userEntity.findOne({ where: field, relations: ['authentication'] });
    }

}