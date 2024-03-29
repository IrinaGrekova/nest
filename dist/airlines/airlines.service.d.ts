import { Airline } from './airlines.model';
import { AirlineDto } from './dto/airlines.dto';
export declare class AirlinesService {
    private airlineRepository;
    constructor(airlineRepository: typeof Airline);
    create(airlineData: AirlineDto): Promise<Airline>;
    findAll(): Promise<Airline[]>;
    findOne(id: number): Promise<Airline>;
    remove(id: number): Promise<void>;
}
