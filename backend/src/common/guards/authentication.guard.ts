import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { CheckerTokenService } from './checker-token';

@Injectable()
export class AuthenticationGuard implements CanActivate {

    private readonly _checkerToken: CheckerTokenService;


    constructor(checkerToken: CheckerTokenService) {
        this._checkerToken = checkerToken;
    }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        this._checkerToken.init('access_token', 'x-access-token', context);
        return await this._checkerToken.run();
    }

}


