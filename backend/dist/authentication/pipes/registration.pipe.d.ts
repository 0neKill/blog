import { PipeTransform } from '@nestjs/common';
import { UserService } from '../../features/user/service';
import { RegisterDto, RegisterDtoForValidate } from '../__types__';
export declare class RegistrationPipe implements PipeTransform<RegisterDtoForValidate, Promise<RegisterDto>> {
    private readonly _userService;
    constructor(userService: UserService);
    transform(value: RegisterDtoForValidate): Promise<RegisterDto>;
    private _validate;
    private static _IsEqual;
}
