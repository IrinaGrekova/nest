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
exports.AirlineDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class AirlineDto {
}
exports.AirlineDto = AirlineDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Аэрофлот', description: 'Наименование авиакомпании' }),
    __metadata("design:type", String)
], AirlineDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Россия', description: 'Страна' }),
    __metadata("design:type", String)
], AirlineDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1970', description: 'Год основания' }),
    __metadata("design:type", String)
], AirlineDto.prototype, "founded", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'true', description: 'Статус' }),
    __metadata("design:type", Boolean)
], AirlineDto.prototype, "isActive", void 0);
//# sourceMappingURL=airlines.dto.js.map