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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirlinesController = void 0;
const common_1 = require("@nestjs/common");
const airlines_service_1 = require("./airlines.service");
const airlines_model_1 = require("./airlines.model");
const swagger_1 = require("@nestjs/swagger");
const airlines_dto_1 = require("./dto/airlines.dto");
let AirlinesController = class AirlinesController {
    constructor(airlinesService) {
        this.airlinesService = airlinesService;
    }
    create(airlineData) {
        return this.airlinesService.create(airlineData);
    }
    findAll() {
        return this.airlinesService.findAll();
    }
    findOne(id) {
        return this.airlinesService.findOne(+id);
    }
    remove(id) {
        return this.airlinesService.remove(+id);
    }
};
exports.AirlinesController = AirlinesController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Создание авиакомпании' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: airlines_dto_1.AirlineDto }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [airlines_dto_1.AirlineDto]),
    __metadata("design:returntype", Promise)
], AirlinesController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение всех авиакомпаний' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [airlines_model_1.Airline] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AirlinesController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получение одной авиакомпании по id' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AirlinesController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Удаление авиакомпании' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AirlinesController.prototype, "remove", null);
exports.AirlinesController = AirlinesController = __decorate([
    (0, swagger_1.ApiTags)('AIRLINES'),
    (0, common_1.Controller)('airlines'),
    __metadata("design:paramtypes", [airlines_service_1.AirlinesService])
], AirlinesController);
//# sourceMappingURL=airlines.controller.js.map