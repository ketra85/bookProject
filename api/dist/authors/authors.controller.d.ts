import { AuthorsService } from './authors.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { Author } from './author.entity';
export declare class AuthorsController {
    private readonly authorsService;
    constructor(authorsService: AuthorsService);
    create(createAuthorDto: CreateAuthorDto): Promise<Author>;
    findAll(): Promise<Author[]>;
    findOne(id: string): Promise<Author>;
    remove(id: string): Promise<void>;
}
