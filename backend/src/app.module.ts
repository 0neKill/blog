import { Module } from '@nestjs/common';

import { FeaturesModule } from './features';
import { ConnectModule } from './connect.module';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
    imports: [FeaturesModule, ConnectModule, AuthenticationModule],
})
export class AppModule {

}