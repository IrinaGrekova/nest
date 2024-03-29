import { Model } from "sequelize-typescript";
export declare class AirlineTicket extends Model<AirlineTicket> {
    id: number;
    airlineId: number;
    ticketId: number;
}
