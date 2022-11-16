import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { CheckerTokenService } from './checker-token';

@Injectable()
export class RefreshTokenGuard implements CanActivate {


    private readonly _checkerToken: CheckerTokenService;


    constructor(checkerToken: CheckerTokenService) {
        this._checkerToken = checkerToken;
    }


    async canActivate(context: ExecutionContext): Promise<boolean> {
        this._checkerToken.init('refresh_token', 'x-refresh-token', context);
        return await this._checkerToken.run();
    }

}