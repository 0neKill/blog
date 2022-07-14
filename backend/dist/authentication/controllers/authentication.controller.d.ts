import { AuthenticationService } from '../services';
import { IAuthenticationController, RegisterDto, TokenJWT } from '../__types__';
import { UserId } from '../../features/user/__types__';
export declare class AuthenticationController implements IAuthenticationController {
    private _authenticationService;
    constructor(authenticationService: AuthenticationService);
    registration(dto: RegisterDto): Promise<boolean>;
    authentication(dto: UserId): Promise<TokenJWT>;
}
