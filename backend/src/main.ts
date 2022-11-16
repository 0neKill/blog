import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as cookieParser from 'cookie-parser';

import { AppModule } from './app.module';

(async function() {
    const PORT = process.env.PORT ?? 3000;

    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    app.setGlobalPrefix('api');
    app.use(cookieParser());
    await app.listen(PORT, () => {
        console.log(`Server is running... ${PORT}`);
    });
})();