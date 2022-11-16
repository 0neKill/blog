import { Body, Controller, Post, Res } from '@nestjs/common';

import { AuthenticationService } from '../services';
import { AuthenticationPipe, RegistrationPipe } from '../pipes';

import { RegisterDto, TokenJWT } from '../__types__';
import { UserId } from '../../features/user/__types__';

@Controller('/')
export class AuthenticationController {
    private readonly _authenticationService: AuthenticationService;

    constructor(authenticationService: AuthenticationService) {
        this._authenticationService = authenticationService;
    }

    @Post('registration')
    public async registration(@Body(RegistrationPipe) dto: RegisterDto): Promise<boolean> {
        return this._authenticationService.registration(dto);
    }

    @Post('authentication')
    public async authentication(@Body(AuthenticationPipe) dto: UserId, @Res({ passthrough: true }) response): Promise<TokenJWT> {
        const data = await this._authenticationService.authentication(dto);
        response.cookie('refresh_token', data.refresh_token, {
            maxAge: 7000,
            httpOnly: true,
        });
        return data;
    }
}

