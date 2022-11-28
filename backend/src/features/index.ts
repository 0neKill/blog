import { Module } from '@nestjs/common';

import { UserModule } from './user';
import { BlogModule } from './blog';

@Module({
    imports: [UserModule, BlogModule],
    exports: [UserModule, BlogModule],
})
export class FeaturesModule {

}

