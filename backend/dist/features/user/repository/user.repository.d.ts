import { Repository } from 'typeorm';
import { UserEntity } from '../entity';
import { DataForCreate, FieldBySearch, IUserRepository } from '../__types__/interfaces';
export declare class UserRepository implements IUserRepository {
    private readonly _userEntity;
    constructor(userEntity: Repository<UserEntity>);
    insert(user: DataForCreate): Promise<UserEntity>;
    getUserBy(field: FieldBySearch): Promise<UserEntity>;
}
