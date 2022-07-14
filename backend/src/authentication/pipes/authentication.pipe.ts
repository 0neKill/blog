import { HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { AuthenticationDtoForValidate } from '../__types__';
import { AuthenticationService } from '../services';
import { UserId } from '../../features/user/__types__';


@Injectable()
export class AuthenticationPipe implements PipeTransform<AuthenticationDtoForValidate, Promise<UserId>> {
    private readonly _authenticationService: AuthenticationService;

    constructor(authenticationService: AuthenticationService) {
        this._authenticationService = authenticationService;
    }

    async transform(value: AuthenticationDtoForValidate): Promise<UserId> {
        const object = plainToClass(AuthenticationDtoForValidate, value);
        let errors = await validate(object);

        if (errors.length) {
            throw new HttpException('Неверный пароль или логин', HttpStatus.BAD_REQUEST);
        }

        const candidateId = await this._authenticationService.getCandidateAfterVerification(value);
        if (!candidateId) {
            throw new HttpException('Неверный пароль или логин', HttpStatus.BAD_REQUEST);
        }
        return candidateId.id;
    }

}
