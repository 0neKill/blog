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
var RegistrationPipe_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationPipe = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const service_1 = require("../../features/user/service");
const __types__1 = require("../__types__");
let RegistrationPipe = RegistrationPipe_1 = class RegistrationPipe {
    constructor(userService) {
        this._userService = userService;
    }
    async transform(value) {
        const object = (0, class_transformer_1.plainToClass)(__types__1.RegisterDtoForValidate, value);
        let errors = await this._validate(object);
        if (errors.length) {
            const message = errors.map(item => {
                var _a;
                return (`${item.property}: ${Object.values((_a = item.constraints) !== null && _a !== void 0 ? _a : item.children[0].constraints).join(', ')}`);
            });
            throw new common_1.HttpException(message, common_1.HttpStatus.BAD_REQUEST);
        }
        return {
            email: value.email,
            user_name: value.user_name,
            password: value.password,
        };
    }
    async _validate(object) {
        let errors = await (0, class_validator_1.validate)(object);
        if (!(RegistrationPipe_1._IsEqual(object.password, object.repeat_password))) {
            errors.push({
                value: object.repeat_password,
                constraints: { 'repeat_password': 'Пароли не совпадают' },
                property: 'repeat_password',
            });
        }
        if (await this._userService.existUserBy({ email: object.email })) {
            errors.push({
                value: object.email,
                constraints: { 'email': 'Пользователь с таким email существует' },
                property: 'email',
            });
        }
        return errors;
    }
    static _IsEqual(password, repeat_password) {
        return password === repeat_password;
    }
};
RegistrationPipe = RegistrationPipe_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [service_1.UserService])
], RegistrationPipe);
exports.RegistrationPipe = RegistrationPipe;
//# sourceMappingURL=registration.pipe.js.map