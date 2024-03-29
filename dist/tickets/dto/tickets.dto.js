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
exports.TicketDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class TicketDto {
}
exports.TicketDto = TicketDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "TN-00001", description: "Номер билета" }),
    __metadata("design:type", String)
], TicketDto.prototype, "numberTicket", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "NF-000001", description: "Номер рейса" }),
    __metadata("design:type", String)
], TicketDto.prototype, "flight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "23.12.2023", description: "Дата рейса" }),
    __metadata("design:type", String)
], TicketDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "15:30", description: "Время рейса" }),
    __metadata("design:type", String)
], TicketDto.prototype, "time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Москва", description: "Город отправления" }),
    __metadata("design:type", String)
], TicketDto.prototype, "locationFrom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Цурих", description: "Город прибытия" }),
    __metadata("design:type", String)
], TicketDto.prototype, "locationTo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "true", description: "Статус" }),
    __metadata("design:type", Boolean)
], TicketDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "12345", description: "Id авиакомпании" }),
    __metadata("design:type", Number)
], TicketDto.prototype, "airlineId", void 0);
//# sourceMappingURL=tickets.dto.js.map