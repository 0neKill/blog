import { AuthenticationEntity } from '../../../authentication/entities';
export declare class UserEntity {
    id: number;
    email: string;
    name: string;
    authentication_id: number;
    authentication: AuthenticationEntity;
}
