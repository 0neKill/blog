export const getBcryptConfiguration = (): { salt: string | number } => (
    {
        salt: Number(process.env.HASH_SALT),
    }
);