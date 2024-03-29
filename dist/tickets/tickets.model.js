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
exports.Ticket = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const airlines_model_1 = require("../airlines/airlines.model");
const airline_tickets_model_1 = require("./airline-tickets.model");
let Ticket = class Ticket extends sequelize_typescript_1.Model {
};
exports.Ticket = Ticket;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "1", description: "Уникальный идентификатор" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", String)
], Ticket.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "TN-00001", description: "Номер билета" }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Ticket.prototype, "numberTicket", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "NF-000001", description: "Номер рейса" }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Ticket.prototype, "flight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "true", description: "Статус" }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.BOOLEAN, defaultValue: true }),
    __metadata("design:type", Boolean)
], Ticket.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2024-03-04", description: "Дата рейса" }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Ticket.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2024-03-04", description: "Дата рейса" }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Ticket.prototype, "time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Москва", description: "Город отправления" }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Ticket.prototype, "locationFrom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Цурих", description: "Город прибытия" }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Ticket.prototype, "locationTo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "1", description: "Уникальный идентификатор" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Ticket.prototype, "airlineId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => airlines_model_1.Airline, () => airline_tickets_model_1.AirlineTicket),
    __metadata("design:type", Array)
], Ticket.prototype, "airlines", void 0);
exports.Ticket = Ticket = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "tickets" })
], Ticket);
//# sourceMappingURL=tickets.model.js.map