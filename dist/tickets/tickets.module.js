"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketsModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const tickets_model_1 = require("./tickets.model");
const tickets_controller_1 = require("./tickets.controller");
const tickets_service_1 = require("./tickets.service");
const airlines_model_1 = require("../airlines/airlines.model");
const airlines_module_1 = require("../airlines/airlines.module");
const airline_tickets_model_1 = require("./airline-tickets.model");
let TicketsModule = class TicketsModule {
};
exports.TicketsModule = TicketsModule;
exports.TicketsModule = TicketsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([tickets_model_1.Ticket, airlines_model_1.Airline, airline_tickets_model_1.AirlineTicket]),
            (0, common_1.forwardRef)(() => airlines_module_1.AirlinesModule),
        ],
        controllers: [tickets_controller_1.TicketsController],
        providers: [tickets_service_1.TicketsService],
        exports: [tickets_service_1.TicketsService],
    })
], TicketsModule);
//# sourceMappingURL=tickets.module.js.map