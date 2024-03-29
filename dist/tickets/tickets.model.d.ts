import { Model } from "sequelize-typescript";
import { Airline } from "src/airlines/airlines.model";
export declare class Ticket extends Model<Ticket> {
    id: string;
    numberTicket: string;
    flight: string;
    isActive: boolean;
    date: string;
    time: string;
    locationFrom: string;
    locationTo: string;
    airlineId: number;
    airlines: Airline[];
}
