import { TicketsService } from './tickets.service';
import { TicketDto } from './dto/tickets.dto';
import { Ticket } from './tickets.model';
export declare class TicketsController {
    private readonly ticketsService;
    constructor(ticketsService: TicketsService);
    create(ticketData: TicketDto): Promise<TicketDto>;
    findAll(): Promise<Ticket[]>;
    findOne(id: string): Promise<Ticket>;
    remove(id: string): Promise<void>;
    findAllByAirlineId(id: number): Promise<Ticket[]>;
}
