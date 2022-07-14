import type { FieldBySearch, User } from './user';
import { UserEntity } from '../../entity';

export interface IUserService {
    create(user: User): Promise<UserEntity>,

    existUserBy(field: FieldBySearch): Promise<boolean>

    getExistUserBy(field: FieldBySearch): Promise<UserEntity>;
}