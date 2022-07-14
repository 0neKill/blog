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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationService = void 0;
const common_1 = require("@nestjs/common");
const repositories_1 = require("../repositories");
const cryptography_service_1 = require("./cryptography.service");
const session_service_1 = require("./session.service");
const service_1 = require("../../features/user/service");
let AuthenticationService = class AuthenticationService {
    constructor(authenticationRepository, cryptographyService, sessionService, userService) {
        this._authenticationRepository = authenticationRepository;
        this._cryptographyService = cryptographyService;
        this._sessionService = sessionService;
        this._userService = userService;
    }
    async registration(candidateData) {
        const { password } = candidateData, candidate = __rest(candidateData, ["password"]);
        const authentication = await this._createDataForUser(password);
        await this._userService.create({
            name: candidate.user_name, email: candidate.email, authentication: authentication,
        });
        return true;
    }
    async authentication(candidateData) {
        console.log(candidateData, 'тут');
        return Promise.resolve(undefined);
    }
    async getCandidateAfterVerification(candidateData) {
        const candidate = await this._userService.getExistUserBy({
            email: candidateData.email,
        });
        return await this._getCandidateOrNull(candidate, candidateData.password);
    }
    async _getCandidateOrNull(candidate, password) {
        if (candidate && await this._isCorrectPassword(password, candidate.authentication.password)) {
            return candidate;
        }
        return null;
    }
    async _isCorrectPassword(passwordFromDto, candidatePassword) {
        return await this._cryptographyService.isEqualHash(passwordFromDto, candidatePassword);
    }
    async _createDataForUser(password) {
        const passwordHash = await this._cryptographyService.hashing(password);
        return await this._authenticationRepository.create(passwordHash);
    }
};
AuthenticationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repositories_1.AuthenticationRepository,
        cryptography_service_1.CryptographyService,
        session_service_1.SessionService,
        service_1.UserService])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map