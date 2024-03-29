import { Model } from "sequelize-typescript";
import { Ticket } from "src/tickets/tickets.model";
export declare class Airline extends Model<Airline> {
    id: number;
    name: string;
    country: string;
    isActive: boolean;
    founded: string;
    tickets: Ticket[];
}
