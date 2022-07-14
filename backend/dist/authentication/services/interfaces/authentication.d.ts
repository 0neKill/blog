import type { RegisterDto } from "../../__types__";
import { AuthenticationEntity } from "../../entities";
export interface IAuthenticationService {
    registration: (userData: RegisterDto) => Promise<AuthenticationEntity>;
    authentication: () => Promise<boolean>;
}
