import { Repository } from 'typeorm';
import { CreateAuthorDto } from './dto/create-author.dto';
import { Author } from './author.entity';
export declare class AuthorsService {
    private readonly authorsRepository;
    constructor(authorsRepository: Repository<Author>);
    create(createAuthorDto: CreateAuthorDto): Promise<Author>;
    findAll(): Promise<Author[]>;
    findOne(id: string): Promise<Author>;
    remove(id: string): Promise<void>;
}
