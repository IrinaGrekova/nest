import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Ticket } from './tickets.model';
import { TicketDto } from './dto/tickets.dto';

@Injectable()
export class TicketsService {
    constructor(
    @InjectModel(Ticket)
    private ticketsRepository: typeof Ticket,
  ) {}

  async create(ticketData: TicketDto): Promise<TicketDto> {
    return this.ticketsRepository.create(ticketData);
  }

  async findAll(): Promise<Ticket[]> {
    return this.ticketsRepository.findAll();
  }

  async findOne(id: number): Promise<Ticket> {
    return this.ticketsRepository.findByPk(id);
  }

  async remove(id: number): Promise<void> {
    const airline = await this.findOne(id);
    await airline.destroy();
  }

  async findAllByAirlineId(airlineId: number): Promise<Ticket[]> {
    return this.ticketsRepository.findAll({
      where: { airlineId },
    });
  }
}
