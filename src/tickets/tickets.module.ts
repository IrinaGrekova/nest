import { Module, forwardRef } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Ticket } from "./tickets.model";
import { TicketsController } from "./tickets.controller";
import { TicketsService } from "./tickets.service";
import { Airline } from "src/airlines/airlines.model";
import { AirlinesModule } from "src/airlines/airlines.module";
import { AirlineTicket } from "./airline-tickets.model";

@Module({
  imports: [
    SequelizeModule.forFeature([Ticket, Airline, AirlineTicket]),
    forwardRef(() => AirlinesModule),
  ],
  controllers: [TicketsController],
  providers: [TicketsService],
  exports: [TicketsService],
})
export class TicketsModule {}
