import { Injectable } from '@nestjs/common';

import { UserRepository } from '../repository';
import { UserEntity } from '../entity';

import { DataForCreate, FieldBySearch, IFile, UserId } from '../__types__';
import { FileService } from '../../utils/file/services';


@Injectable()
export class UserService {

    private readonly _userRepository: UserRepository;
    private readonly _fileService: FileService;

    constructor(userRepository: UserRepository, fileService: FileService) {
        this._userRepository = userRepository;
        this._fileService = fileService;
    }

    public async create(user: DataForCreate): Promise<UserEntity> {
        return await this._userRepository.insert(user);
    }

    public async getUser(userId: UserId): Promise<UserEntity> {
        const user = await this.getExistUserBy({ id: userId }, ['email', 'name', 'skill', 'avatar']);
        return {
            ...user,
            avatar: user.avatar ? process.env.HOST + user.avatar : null,
        };
    }

    public async existUserBy(field: FieldBySearch): Promise<boolean> {
        return !!await this.getExistUserBy(field);
    }


    public async getExistUserBy(field: FieldBySearch, select?: Array<keyof FieldBySearch> | null, relations?: Array<'authentication'>): Promise<UserEntity> {
        return await this._userRepository.getUserBy(field, select, relations);
    }


    public async setAvatar(userId: UserId, avatar: IFile): Promise<boolean> {
        const fileName = await this._fileService.save(avatar);
        return await this._userRepository.update({ id: userId }, { avatar: fileName });
    }
}