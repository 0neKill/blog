import { Controller, Post, UseGuards } from '@nestjs/common';

import { SessionService } from '../services';
import { GetRefreshToken, GetUserId, RefreshTokenGuard } from '../../common';
import { UserId } from '../../features/user/__types__';
import { TokenJWT } from '../__types__';


@Controller('session')
export class SessionController {

    private readonly _sessionService: SessionService;

    constructor(sessionService: SessionService) {
        this._sessionService = sessionService;
    }

    @UseGuards(RefreshTokenGuard)
    @Post('/refresh')
    public async refresh(@GetUserId() userId: UserId, @GetRefreshToken() refreshToken: string): Promise<TokenJWT> {
        return await this._sessionService.refresh(userId, refreshToken);
    }

}