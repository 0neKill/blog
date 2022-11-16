import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthenticationService, CryptographyService, JsonWebTokenService, SessionService } from './services';
import { AuthenticationController, SessionController } from './controllers';
import { AuthenticationRepository, SessionRepository } from './repositories';
import { AuthenticationEntity, SessionEntity } from './entities';

import { FeaturesModule } from '../features';
import { CheckerTokenModule } from '../common';

@Module({
    imports: [TypeOrmModule.forFeature([AuthenticationEntity, SessionEntity]), FeaturesModule, forwardRef(() => CheckerTokenModule)],
    controllers: [AuthenticationController, SessionController],
    providers: [
        AuthenticationService,
        CryptographyService,
        SessionService,
        JsonWebTokenService,

        AuthenticationRepository,
        SessionRepository,

    ],
    exports: [
        JsonWebTokenService,
        SessionService,
    ],
})
export class AuthenticationModule {

}