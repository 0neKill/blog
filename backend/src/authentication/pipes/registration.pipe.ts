import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { validate, ValidationError } from 'class-validator';
import { plainToClass } from 'class-transformer';

import { UserService } from '../../features/user/service';

import { RegisterDto, RegisterDtoForValidate } from '../__types__';


@Injectable()
export class RegistrationPipe implements PipeTransform<RegisterDtoForValidate, Promise<RegisterDto>> {
    private readonly _userService: UserService;

    constructor(userService: UserService) {
        this._userService = userService;
    }


    async transform(value: RegisterDtoForValidate): Promise<RegisterDto> {
        const object: RegisterDtoForValidate = plainToClass(RegisterDtoForValidate, value);
        let errors = await this._validate(object);

        if (errors.length) {
            const message = errors.map(item => (
                `${item.property}: ${Object.values(item.constraints ?? item.children[0].constraints).join(', ')}`
            ));
            throw new HttpException(message, HttpStatus.BAD_REQUEST);
        }
        return {
            email: value.email,
            user_name: value.user_name,
            password: value.password,
            skill: value.skill,
        };
    }

    private async _validate(object: RegisterDtoForValidate): Promise<ValidationError[]> {
        let errors = await validate(object);

        if (!(RegistrationPipe._IsEqual(object.password, object.repeat_password))) {
            errors.push({
                value: object.repeat_password,
                constraints: { 'repeat_password': 'Пароли не совпадают' },
                property: 'repeat_password',
            });
        }

        if (await this._userService.existUserBy({ email: object.email })) {
            errors.push({
                value: object.email,
                constraints: { 'email': 'Пользователь с таким email существует' },
                property: 'email',
            });
        }
        return errors;
    }

    private static _IsEqual(password: string, repeat_password: string): boolean {
        return password === repeat_password;
    }

}