import { IsEmail, IsNotEmpty, MinLength, IsString } from 'class-validator';

import { Password } from '../interfaces';

export class RegisterDto {
    @IsNotEmpty({ message: 'Поле не может быть пустым' })
    @IsEmail(() => ({}), { message: 'Поле должно быть E-mail' })
    public readonly email: string;

    @IsNotEmpty({ message: 'Поле не может быть пустым' })
    @IsString({ message: 'Дожно быть строкой' })
    public readonly user_name: string;

    @IsNotEmpty({ message: 'Поле не может быть пустым' })
    @IsString({ message: 'Дожно быть строкой' })
    public readonly skill: string;

    @IsNotEmpty({ message: 'Поле не может быть пустым' })
    @MinLength(4, { message: 'Пароль не может быть меньше 4 символов' })
    public readonly password: Password;
}

export class RegisterDtoForValidate extends RegisterDto {
    @IsNotEmpty({ message: 'Не может быть пустым' })
    public readonly repeat_password: Password;
}