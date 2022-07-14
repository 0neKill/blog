export interface ICryptographyService {
    hashing(string: string): Promise<string>;
    isEqualHash(stringOne: string, stringTwo: string): Promise<boolean>;
}
