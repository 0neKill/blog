import { Body, Controller, Post } from '@nestjs/common';

import { AuthenticationService } from '../services';
import { AuthenticationPipe, RegistrationPipe } from '../pipes';

import { IAuthenticationController, RegisterDto, TokenJWT } from '../__types__';
import { UserId } from '../../features/user/__types__';

@Controller('authentication')
export class AuthenticationController implements IAuthenticationController {
    private _authenticationService: AuthenticationService;

    constructor(authenticationService: AuthenticationService) {
        this._authenticationService = authenticationService;
    }

    @Post('registration')
    async registration(@Body(RegistrationPipe) dto: RegisterDto): Promise<boolean> {
        return this._authenticationService.registration(dto);
    }

    @Post('sing_in')
    async authentication(@Body(AuthenticationPipe) dto: UserId): Promise<TokenJWT> {
        return this._authenticationService.authentication(dto);
    }
}

