import { Module } from '@nestjs/common';

import { ConnectModule } from './connect.module';

import { FeaturesModule } from './features';
import { AuthenticationModule } from './authentication';


@Module({
    imports: [FeaturesModule, ConnectModule, AuthenticationModule],
})
export class AppModule {

}