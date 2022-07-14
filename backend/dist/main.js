"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
(async function () {
    var _a;
    const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(PORT, () => {
        console.log(`Server is running... ${PORT}`);
    });
})();
//# sourceMappingURL=main.js.map