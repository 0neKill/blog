import { Injectable } from '@nestjs/common';

import { UserRepository } from '../repository';
import { UserEntity } from '../entity';

import { DataForCreate, FieldBySearch } from '../__types__';


@Injectable()
export class UserService {

    private readonly _userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this._userRepository = userRepository;
    }

    public async create(user: DataForCreate): Promise<UserEntity> {
        return await this._userRepository.insert(user);
    }

    public async existUserBy(field: FieldBySearch): Promise<boolean> {
        return !!await this.getExistUserBy(field);
    }

    public async getExistUserBy(field: FieldBySearch): Promise<UserEntity> {
        return await this._userRepository.getUserBy(field);
    }


}