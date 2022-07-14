import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserRepository } from './repository';
import { UserService } from './service';
import { UserEntity } from './entity';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    providers: [UserService, UserRepository],
    exports: [UserService],
})
export class UserModule {
}

