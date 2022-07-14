import { Password } from '../interfaces';
export declare class RegisterDto {
    readonly email: string;
    readonly user_name: string;
    readonly password: Password;
}
export declare class RegisterDtoForValidate extends RegisterDto {
    readonly repeat_password: Password;
}
