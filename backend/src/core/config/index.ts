import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { getDatabaseConfiguration } from './database';
import { ConfigService } from '@nestjs/config';
import { getBcryptConfiguration } from './bcrypt';
import { getJsonWebTokenConfiguration, JsonWebTokenConfiguration } from './json-web-token';
import { getSessionConfiguration, SessionConfiguration } from './session';

interface ConfigurationFactory {
    database: TypeOrmModuleOptions,
    bcrypt: { salt: string | number },
    jsonwebtoken: JsonWebTokenConfiguration,
    session: SessionConfiguration,
}

export const configurationFactory = (): ConfigurationFactory => ({
    database: getDatabaseConfiguration(),
    bcrypt: getBcryptConfiguration(),
    jsonwebtoken: getJsonWebTokenConfiguration(),
    session: getSessionConfiguration(),
});

export const configurationDatabaseFactory = (configService: ConfigService): TypeOrmModuleOptions => {
    return configService.get('database');
};