"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = async () => {
    var _a;
    const configPath = `./${(_a = process.env.NODE_ENV) !== null && _a !== void 0 ? _a : 'development.ts'}`;
    const { config } = await Promise.resolve().then(() => require(configPath));
    return config;
};
//# sourceMappingURL=index.js.map