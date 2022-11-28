import { JsonWebTokenService, NameTokens, SessionService } from '../../../authentication/services';
import { ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';

@Injectable()
export class CheckerTokenService {
    private readonly _jsonWebTokenService: JsonWebTokenService;
    private readonly _sessionService: SessionService;

    private _type: NameTokens;
    private _header: 'x-access-token' | 'x-refresh-token';
    private _context: ExecutionContext;


    constructor(jsonWebTokenService: JsonWebTokenService, sessionService: SessionService) {
        this._jsonWebTokenService = jsonWebTokenService;
        this._sessionService = sessionService;
    }


    init(type: NameTokens, header: 'x-access-token' | 'x-refresh-token', context: ExecutionContext) {
        this._type = type;
        this._header = header;
        this._context = context;
    }

    async run(): Promise<boolean> {
        try {

            const request = this._context.switchToHttp().getRequest();
            const accessTokenFromHeader = request.headers[this._header];
            const _token = accessTokenFromHeader.split('bearer ')[1];
            const tokenAfterVerify = this._jsonWebTokenService.verifyToken(_token);

            if (!this._jsonWebTokenService.isTokenEqualByType(tokenAfterVerify.type, this._type)) {
                return false;
            }

            if (!await this._sessionService.isSessionExists(tokenAfterVerify.id)) {
                return false;
            }

            request.userId = tokenAfterVerify.userId;
            this._type === 'refresh_token' && (request.refresh_token = tokenAfterVerify.id);

            return true;
        } catch (e) {
            throw new ForbiddenException();
        }
    }
}