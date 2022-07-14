import { UserEntity } from '../../entity';
import { FieldBySearch, User } from './user';


export interface IUserRepository {
    insert(user: User): Promise<UserEntity>,

    getUserBy(field: FieldBySearch): Promise<UserEntity>,
}

