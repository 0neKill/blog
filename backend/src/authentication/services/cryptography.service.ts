import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { ICryptographyService } from '../__types__';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CryptographyService implements ICryptographyService {
    private readonly _configService: ConfigService;

    constructor(configService: ConfigService) {
        this._configService = configService;
    }

    async hashing(string: string): Promise<string> {
        return await bcrypt.hash(string, this._configService.get('hash.salt'));
    }

    async isEqualHash(stringOne: string, stringTwo: string): Promise<boolean> {
        return await bcrypt.compare(stringOne, stringTwo);
    }
}
