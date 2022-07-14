import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class AuthenticationDtoForValidate {

    @IsEmail(() => ({}), { message: 'Поле должно быть E-mail' })
    @IsNotEmpty({ message: 'Поле не может быть пустым' })
    readonly email: string;

    @IsNotEmpty({ message: 'Поле не может быть пустым' })
    @MinLength(4, { message: 'Поле не может быть пустым' })
    readonly password: string;
}


