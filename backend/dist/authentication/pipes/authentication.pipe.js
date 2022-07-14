"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationPipe = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const __types__1 = require("../__types__");
const services_1 = require("../services");
let AuthenticationPipe = class AuthenticationPipe {
    constructor(authenticationService) {
        this._authenticationService = authenticationService;
    }
    async transform(value) {
        const object = (0, class_transformer_1.plainToClass)(__types__1.AuthenticationDtoForValidate, value);
        let errors = await (0, class_validator_1.validate)(object);
        if (errors.length) {
            throw new common_1.HttpException('Неверный пароль или логин', common_1.HttpStatus.BAD_REQUEST);
        }
        const candidateId = await this._authenticationService.getCandidateAfterVerification(value);
        if (!candidateId) {
            throw new common_1.HttpException('Неверный пароль или логин', common_1.HttpStatus.BAD_REQUEST);
        }
        return candidateId.id;
    }
};
AuthenticationPipe = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [services_1.AuthenticationService])
], AuthenticationPipe);
exports.AuthenticationPipe = AuthenticationPipe;
//# sourceMappingURL=authentication.pipe.js.map