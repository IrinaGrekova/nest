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
exports.Airline = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const airline_tickets_model_1 = require("../tickets/airline-tickets.model");
const tickets_model_1 = require("../tickets/tickets.model");
let Airline = class Airline extends sequelize_typescript_1.Model {
};
exports.Airline = Airline;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "1", description: "Уникальный идентификатор" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Airline.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Аэрофлот", description: "Наименование компании" }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Airline.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Россия", description: "Страна" }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Airline.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "true", description: "Статус" }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.BOOLEAN, defaultValue: true }),
    __metadata("design:type", Boolean)
], Airline.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "1970", description: "Год основания" }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: true }),
    __metadata("design:type", String)
], Airline.prototype, "founded", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => tickets_model_1.Ticket, () => airline_tickets_model_1.AirlineTicket),
    __metadata("design:type", Array)
], Airline.prototype, "tickets", void 0);
exports.Airline = Airline = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "airlines" })
], Airline);
//# sourceMappingURL=airlines.model.js.map