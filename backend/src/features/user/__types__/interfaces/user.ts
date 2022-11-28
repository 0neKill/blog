import { UserEntity } from '../../entity';

export type User = Omit<UserEntity, 'authentication_id'>;
export type UserId = UserEntity['id'];
export type DataForCreate = Omit<User, 'id' | 'avatar'>;

export type FieldBySearch = Partial<Pick<User, 'email' | 'name' | 'id' | 'avatar' | 'skill' | 'authentication'>>;

