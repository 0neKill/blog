import { Repository } from 'typeorm';
import { AuthenticationEntity } from '../entities';
import { IAuthenticationRepository, Password } from '../__types__';
export declare class AuthenticationRepository implements IAuthenticationRepository {
    private readonly _authenticationEntity;
    constructor(authenticationEntity: Repository<AuthenticationEntity>);
    create(password: Password): Promise<AuthenticationEntity>;
}
