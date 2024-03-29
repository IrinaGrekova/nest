import { Ticket } from './tickets.model';
import { TicketDto } from './dto/tickets.dto';
export declare class TicketsService {
    private ticketsRepository;
    constructor(ticketsRepository: typeof Ticket);
    create(ticketData: TicketDto): Promise<TicketDto>;
    findAll(): Promise<Ticket[]>;
    findOne(id: number): Promise<Ticket>;
    remove(id: number): Promise<void>;
    findAllByAirlineId(airlineId: number): Promise<Ticket[]>;
}
