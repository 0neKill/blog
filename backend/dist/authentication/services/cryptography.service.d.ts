import { ICryptographyService } from '../__types__';
import { ConfigService } from '@nestjs/config';
export declare class CryptographyService implements ICryptographyService {
    private readonly _configService;
    constructor(configService: ConfigService);
    hashing(string: string): Promise<string>;
    isEqualHash(stringOne: string, stringTwo: string): Promise<boolean>;
}
