import { ApiProperty } from "@nestjs/swagger";
import {
  AllowNull,
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { Airline } from "src/airlines/airlines.model";
import { AirlineTicket } from "./airline-tickets.model";

@Table({ tableName: "tickets" })
export class Ticket extends Model<Ticket> {
  @ApiProperty({ example: "1", description: "Уникальный идентификатор" })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: string;

  @ApiProperty({ example: "TN-00001", description: "Номер билета" })
  @Column({ type: DataType.STRING, allowNull: false })
  numberTicket: string;

  @ApiProperty({ example: "NF-000001", description: "Номер рейса" })
  @Column({ type: DataType.STRING, allowNull: false })
  flight: string;

  @ApiProperty({ example: "true", description: "Статус" })
  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  isActive: boolean;

  @ApiProperty({ example: "2024-03-04", description: "Дата рейса" })
  @Column({ type: DataType.STRING, allowNull: false })
  date: string;

  @ApiProperty({ example: "2024-03-04", description: "Дата рейса" })
  @Column({ type: DataType.STRING, allowNull: false })
  time: string;

  @ApiProperty({ example: "Москва", description: "Город отправления" })
  @Column({ type: DataType.STRING, allowNull: false })
  locationFrom: string;

  @ApiProperty({ example: "Цурих", description: "Город прибытия" })
  @Column({ type: DataType.STRING, allowNull: false })
  locationTo: string;

  @ApiProperty({ example: "1", description: "Уникальный идентификатор" })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
  })
  airlineId: number;

  @BelongsToMany(() => Airline, () => AirlineTicket)
    airlines: Airline[];
}
