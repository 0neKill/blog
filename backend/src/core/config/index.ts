export default async () => {
    const configPath = `./${process.env.NODE_ENV ?? 'development.ts'}`;
    const {config} = await import(configPath);
    return config;
}