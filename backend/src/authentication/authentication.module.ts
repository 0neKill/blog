import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthenticationService, CryptographyService, SessionService } from './services';
import { AuthenticationController, SessionController } from './controllers';
import { AuthenticationRepository, SessionRepository } from './repositories';
import { AuthenticationEntity } from './entities';
import { FeaturesModule } from '../features';
import { SessionEntity } from './entities';

@Module({
    imports: [TypeOrmModule.forFeature([AuthenticationEntity, SessionEntity]), FeaturesModule],
    controllers: [AuthenticationController, SessionController],
    providers: [
        AuthenticationService,
        CryptographyService,
        SessionService,

        AuthenticationRepository,
        SessionRepository,
    ],
})
export class AuthenticationModule {

}