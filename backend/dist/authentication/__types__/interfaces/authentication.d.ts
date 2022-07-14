import { RegisterDto, AuthenticationDtoForValidate } from '../dto';
import { User, UserId } from '../../../features/user/__types__';
interface Authentication {
    registration(candidateData: RegisterDto): Promise<boolean>;
    authentication(userData: UserId): Promise<TokenJWT>;
}
export declare type IAuthenticationController = Authentication;
export interface IAuthenticationService extends Authentication {
    getCandidateAfterVerification(candidateData: AuthenticationDtoForValidate): Promise<User | null>;
}
export declare type Password = string;
export interface TokenJWT {
    access_token: string;
    refresh_token: string;
}
export {};
