"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const path_1 = require("path");
const entities_1 = require("./authentication/entities");
const entity_1 = require("./features/user/entity");
const core_1 = require("./core");
const entities_2 = require("./authentication/entities");
let ConnectModule = class ConnectModule {
};
ConnectModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: `${(0, path_1.join)(__dirname, '..', `./.env/.env.${(_a = process.env.NODE_ENV) !== null && _a !== void 0 ? _a : 'development.ts'}`)}`,
                isGlobal: true,
                load: [core_1.config],
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: (configService) => (Object.assign(Object.assign({}, configService.get('database')), { entities: [entities_1.AuthenticationEntity, entity_1.UserEntity, entities_2.SessionEntity], synchronize: true })),
                inject: [config_1.ConfigService],
            }),
        ],
    })
], ConnectModule);
exports.ConnectModule = ConnectModule;
//# sourceMappingURL=connect.module.js.map