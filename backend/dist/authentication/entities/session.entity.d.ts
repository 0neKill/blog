import { UserEntity } from '../../features/user/entity';
export declare class SessionEntity {
    id: number;
    refresh_id: string;
    access_id: string;
    user_id: number;
    user: UserEntity;
}
