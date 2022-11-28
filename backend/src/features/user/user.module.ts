import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserRepository } from './repository';
import { UserService } from './service';
import { UserEntity } from './entity';
import { UserController } from './controller';
import { CheckerTokenModule } from '../../common';
import { FileModule } from '../utils';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity]), CheckerTokenModule, FileModule],
    controllers: [UserController],
    providers: [UserService, UserRepository],
    exports: [UserService],
})
export class UserModule {
}

