import { Injectable } from '@nestjs/common';

import { UserRepository } from '../repository';
import { UserEntity } from '../entity';

import { DataForCreate, FieldBySearch, IUserService } from '../__types__/interfaces';

@Injectable()
export class UserService implements IUserService {

    private readonly _userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this._userRepository = userRepository;
    }

    async create(user: DataForCreate): Promise<UserEntity> {
        return await this._userRepository.insert(user);
    }

    async existUserBy(field: FieldBySearch): Promise<boolean> {
        return !!await this.getExistUserBy(field);
    }

    async getExistUserBy(field: FieldBySearch): Promise<UserEntity> {
        return await this._userRepository.getUserBy(field);
    }


}