import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { AirlineTicket } from "src/tickets/airline-tickets.model";
import { Ticket } from "src/tickets/tickets.model";

@Table({ tableName: "airlines" })
export class Airline extends Model<Airline> {
  @ApiProperty({ example: "1", description: "Уникальный идентификатор" })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "Аэрофлот", description: "Наименование компании" })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @ApiProperty({ example: "Россия", description: "Страна" })
  @Column({ type: DataType.STRING, allowNull: false })
  country: string;

  @ApiProperty({ example: "true", description: "Статус" })
  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  isActive: boolean;

  @ApiProperty({ example: "1970", description: "Год основания" })
  @Column({ type: DataType.STRING, allowNull: true })
  founded: string;

  @BelongsToMany(() => Ticket, () => AirlineTicket)
  tickets: Ticket[];
}
