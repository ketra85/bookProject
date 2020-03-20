import { PublishersService } from './publishers.service';
import { CreatePublisherDto } from './dto/create-publisher.dto';
import { Publisher } from './publisher.entity';
export declare class PublishersController {
    private readonly publishersService;
    constructor(publishersService: PublishersService);
    create(createPublisherDto: CreatePublisherDto): Promise<Publisher>;
    findAll(): Promise<Publisher[]>;
    findOne(id: string): Promise<Publisher>;
    remove(id: string): Promise<void>;
}
