import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Airline } from "src/airlines/airlines.model";
import { Ticket } from "./tickets.model";

@Table({ tableName: "airline-ticket", createdAt: false, updatedAt: false })
export class AirlineTicket extends Model<AirlineTicket> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Airline)
  @Column({ type: DataType.INTEGER })
  airlineId: number;

  @ForeignKey(() => Ticket)
  @Column({ type: DataType.INTEGER })
  ticketId: number;
}
