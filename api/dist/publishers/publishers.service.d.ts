import { Repository } from 'typeorm';
import { CreatePublisherDto } from './dto/create-publisher.dto';
import { Publisher } from './publisher.entity';
export declare class PublishersService {
    private readonly publishersRepository;
    constructor(publishersRepository: Repository<Publisher>);
    create(createPublisherDto: CreatePublisherDto): Promise<Publisher>;
    findAll(): Promise<Publisher[]>;
    findOne(id: string): Promise<Publisher>;
    remove(id: string): Promise<void>;
}
