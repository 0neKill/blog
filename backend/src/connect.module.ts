import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';

import { AuthenticationEntity } from './authentication/entities';
import { UserEntity } from './features/user/entity';
import { config } from './core';
import { SessionEntity } from './authentication/entities';


@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `${join(__dirname, '..', `./.env/.env.${process.env.NODE_ENV ?? 'development.ts'}`)}`,
            isGlobal: true,
            load: [config],
        }),
        TypeOrmModule.forRootAsync({
            useFactory: (configService: ConfigService) => ({
                ...configService.get('database'),
                entities: [AuthenticationEntity, UserEntity, SessionEntity],
                synchronize: true,
            }),
            inject: [ConfigService],
        }),
    ],
})
export class ConnectModule {

}