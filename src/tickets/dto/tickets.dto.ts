import { ApiProperty } from "@nestjs/swagger";

export class TicketDto {
  @ApiProperty({ example: "TN-00001", description: "Номер билета" })
  readonly numberTicket: string;
  @ApiProperty({ example: "NF-000001", description: "Номер рейса" })
  readonly flight: string;
  @ApiProperty({ example: "23.12.2023", description: "Дата рейса" })
  readonly date: string;
  @ApiProperty({ example: "15:30", description: "Время рейса" })
  readonly time: string;
  @ApiProperty({ example: "Москва", description: "Город отправления" })
  readonly locationFrom: string;
  @ApiProperty({ example: "Цурих", description: "Город прибытия" })
  readonly locationTo: string;
  @ApiProperty({ example: "true", description: "Статус" })
  readonly isActive: boolean;
  @ApiProperty({ example: "12345", description: "Id авиакомпании" })
  readonly airlineId: number;
}
