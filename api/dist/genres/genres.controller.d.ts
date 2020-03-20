import { GenresService } from './genres.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { Genre } from './genre.entity';
export declare class GenresController {
    private readonly genresService;
    constructor(genresService: GenresService);
    create(createGenreDto: CreateGenreDto): Promise<Genre>;
    findAll(): Promise<Genre[]>;
    findOne(id: string): Promise<Genre>;
    remove(id: string): Promise<void>;
}
