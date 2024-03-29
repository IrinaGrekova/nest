import { AirlinesService } from './airlines.service';
import { Airline } from './airlines.model';
import { AirlineDto } from './dto/airlines.dto';
export declare class AirlinesController {
    private readonly airlinesService;
    constructor(airlinesService: AirlinesService);
    create(airlineData: AirlineDto): Promise<AirlineDto>;
    findAll(): Promise<Airline[]>;
    findOne(id: string): Promise<Airline>;
    remove(id: string): Promise<void>;
}
