import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';

import { configurationFactory, configurationDatabaseFactory } from './core';


@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `${join(__dirname, '..', '..', `./.env/.env.${process.env.NODE_ENV ?? 'development'}`)}`,
            isGlobal: true,
            load: [configurationFactory],
        }),
        TypeOrmModule.forRootAsync({
            useFactory: configurationDatabaseFactory,
            inject: [ConfigService],
        }),
    ],
})
export class ConnectModule {

}