import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './app.module';

(async function() {
    const PORT = process.env.PORT ?? 3000;
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    await app.listen(PORT, () => {
        console.log(`Server is running... ${PORT}`);
    });
})();