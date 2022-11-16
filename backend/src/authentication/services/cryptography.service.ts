import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { hash, compare } from 'bcrypt';


@Injectable()
export class CryptographyService {
    private readonly _configService: ConfigService;

    constructor(configService: ConfigService) {
        this._configService = configService;
    }

    public async hashing(string: string): Promise<string> {
        return await hash(string, this._configService.get('bcrypt.salt'));
    }

    public async isEqualHash(stringOne: string, stringTwo: string): Promise<boolean> {
        return await compare(stringOne, stringTwo);
    }
}
