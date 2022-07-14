import { PipeTransform } from '@nestjs/common';
import { AuthenticationDtoForValidate } from '../__types__';
import { AuthenticationService } from '../services';
import { UserId } from '../../features/user/__types__';
export declare class AuthenticationPipe implements PipeTransform<AuthenticationDtoForValidate, Promise<UserId>> {
    private readonly _authenticationService;
    constructor(authenticationService: AuthenticationService);
    transform(value: AuthenticationDtoForValidate): Promise<UserId>;
}
