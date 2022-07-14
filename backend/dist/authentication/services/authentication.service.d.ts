import { AuthenticationRepository } from '../repositories';
import { CryptographyService } from './cryptography.service';
import { SessionService } from './session.service';
import { UserService } from '../../features/user/service';
import { AuthenticationDtoForValidate, IAuthenticationService, RegisterDto, TokenJWT } from '../__types__';
import { User, UserId } from '../../features/user/__types__';
export declare class AuthenticationService implements IAuthenticationService {
    private readonly _authenticationRepository;
    private readonly _cryptographyService;
    private readonly _sessionService;
    private readonly _userService;
    constructor(authenticationRepository: AuthenticationRepository, cryptographyService: CryptographyService, sessionService: SessionService, userService: UserService);
    registration(candidateData: RegisterDto): Promise<boolean>;
    authentication(candidateData: UserId): Promise<TokenJWT>;
    getCandidateAfterVerification(candidateData: AuthenticationDtoForValidate): Promise<User | null>;
    private _getCandidateOrNull;
    private _isCorrectPassword;
    private _createDataForUser;
}
