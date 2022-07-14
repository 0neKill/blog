import { Controller, Post } from '@nestjs/common';
import { ISessionController, TokenJWT } from '../__types__';
import { UserId } from '../../features/user/__types__';
import { SessionService } from '../services';

@Controller('api/session')
export class SessionController implements ISessionController {

    private readonly _sessionService: SessionService;

    constructor(sessionService: SessionService) {
        this._sessionService = sessionService;
    }

    @Post('/refresh')
    async refresh(userId: UserId): Promise<TokenJWT> {
        return await this._sessionService.refresh(userId);
    }

}