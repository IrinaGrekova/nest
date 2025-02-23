"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const config_1 = require("@nestjs/config");
const airlines_module_1 = require("./airlines/airlines.module");
const airlines_model_1 = require("./airlines/airlines.model");
const tickets_module_1 = require("./tickets/tickets.module");
const tickets_model_1 = require("./tickets/tickets.model");
const airline_tickets_model_1 = require("./tickets/airline-tickets.model");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [],
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: `.${process.env.NODE_ENV}.env`
            }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                host: process.env.POSTGRES_HOST,
                port: Number(process.env.POSTGRESS_PORT),
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRESS_PASSWORD,
                database: process.env.POSTGRES_DB,
                models: [airlines_model_1.Airline, tickets_model_1.Ticket, airline_tickets_model_1.AirlineTicket],
                autoLoadModels: false,
            }),
            airlines_module_1.AirlinesModule,
            tickets_module_1.TicketsModule,
            airlines_module_1.AirlinesModule
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map