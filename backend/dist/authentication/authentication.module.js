"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const services_1 = require("./services");
const controllers_1 = require("./controllers");
const repositories_1 = require("./repositories");
const entities_1 = require("./entities");
const features_1 = require("../features");
const entities_2 = require("./entities");
let AuthenticationModule = class AuthenticationModule {
};
AuthenticationModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.AuthenticationEntity, entities_2.SessionEntity]), features_1.FeaturesModule],
        controllers: [controllers_1.AuthenticationController, controllers_1.SessionController],
        providers: [
            services_1.AuthenticationService,
            services_1.CryptographyService,
            services_1.SessionService,
            repositories_1.AuthenticationRepository,
            repositories_1.SessionRepository,
        ],
    })
], AuthenticationModule);
exports.AuthenticationModule = AuthenticationModule;
//# sourceMappingURL=authentication.module.js.map