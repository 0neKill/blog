import { SignOptions } from 'jsonwebtoken';
import * as fs from 'fs';
import * as path from 'path';

let path_by = `${__dirname}/../keys/`;

if (process.env.NODE_ENV === 'development') {
    path_by = `${__dirname}/../../../src/core/keys/`;
}

const publicKey = fs.readFileSync(path.join(path_by, 'public.key'));
const privateKey = fs.readFileSync(path.join(path_by, 'private.key'));

export type TokenType = 'ACCESS' | 'REFRESH';

export type OptionJWT = SignOptions & { token: TokenType }
export type JsonWebTokenConfiguration = { private_key: Buffer, public_key: Buffer, access_token: OptionJWT, refresh_token: OptionJWT }

export const getJsonWebTokenConfiguration = (): JsonWebTokenConfiguration => ({
    private_key: privateKey,
    public_key: publicKey,
    access_token: {
        token: 'ACCESS',
        expiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
    },
    refresh_token: {
        token: 'REFRESH',
        expiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
    },
});