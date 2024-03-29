import { Module, forwardRef } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";

import { AirlinesController } from "./airlines.controller";
import { AirlinesService } from "./airlines.service";
import { Airline } from "./airlines.model";
import { Ticket } from "src/tickets/tickets.model";
import { TicketsModule } from "src/tickets/tickets.module";
import { AirlineTicket } from "src/tickets/airline-tickets.model";

@Module({
  imports: [
    SequelizeModule.forFeature([Airline, Ticket, AirlineTicket]),
    forwardRef(() => TicketsModule),
  ],
  controllers: [AirlinesController],
  providers: [AirlinesService],
  exports: [AirlinesService],
})
export class AirlinesModule {}
