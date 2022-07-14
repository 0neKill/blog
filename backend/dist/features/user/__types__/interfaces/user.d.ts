import { UserEntity } from '../../entity';
export declare type User = Omit<UserEntity, 'authentication_id'>;
export declare type UserId = UserEntity['id'];
export declare type DataForCreate = Omit<User, 'id'>;
export declare type FieldBySearch = Partial<Pick<User, 'email' | 'name'>>;
