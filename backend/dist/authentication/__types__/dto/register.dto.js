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
exports.RegisterDtoForValidate = exports.RegisterDto = void 0;
const class_validator_1 = require("class-validator");
class RegisterDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Поле не может быть пустым' }),
    (0, class_validator_1.IsEmail)(() => ({}), { message: 'Поле должно быть E-mail' }),
    __metadata("design:type", String)
], RegisterDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Поле не может быть пустым' }),
    (0, class_validator_1.IsString)({ message: 'Дожно быть строкой' }),
    __metadata("design:type", String)
], RegisterDto.prototype, "user_name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Поле не может быть пустым' }),
    (0, class_validator_1.MinLength)(4, { message: 'Пароль не может быть меньше 4 символов' }),
    __metadata("design:type", String)
], RegisterDto.prototype, "password", void 0);
exports.RegisterDto = RegisterDto;
class RegisterDtoForValidate extends RegisterDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Не может быть пустым' }),
    __metadata("design:type", String)
], RegisterDtoForValidate.prototype, "repeat_password", void 0);
exports.RegisterDtoForValidate = RegisterDtoForValidate;
//# sourceMappingURL=register.dto.js.map