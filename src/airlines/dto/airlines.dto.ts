import { ApiProperty } from "@nestjs/swagger";

export class AirlineDto {
    @ApiProperty({example: 'Аэрофлот', description: 'Наименование авиакомпании'})
    readonly name: string;
    @ApiProperty({example: 'Россия', description: 'Страна'})
    readonly country: string;
    @ApiProperty({example: '1970', description: 'Год основания'})
    readonly founded: string;
    @ApiProperty({example: 'true', description: 'Статус'})
    readonly isActive: boolean;
}