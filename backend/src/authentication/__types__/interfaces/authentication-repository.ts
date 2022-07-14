import { Password } from './authentication';
import { AuthenticationEntity } from '../../entities';

export interface IAuthenticationRepository {
    create(password: Password): Promise<AuthenticationEntity>;
}