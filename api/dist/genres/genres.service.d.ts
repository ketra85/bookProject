import { Repository } from 'typeorm';
import { CreateGenreDto } from './dto/create-genre.dto';
import { Genre } from './genre.entity';
export declare class GenresService {
    private readonly genresRepository;
    constructor(genresRepository: Repository<Genre>);
    create(createGenreDto: CreateGenreDto): Promise<Genre>;
    findAll(): Promise<Genre[]>;
    findOne(id: string): Promise<Genre>;
    remove(id: string): Promise<void>;
}
