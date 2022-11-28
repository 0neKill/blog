import { Module } from '@nestjs/common';

import { ConnectModule } from './connect.module';

import { AuthenticationModule } from './authentication';
import { FeaturesModule } from './features';


@Module({
    imports: [ConnectModule, AuthenticationModule, FeaturesModule],
})
export class AppModule {

}