import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGenreDto } from './dto/create-genre.dto';
import { Genre } from './genre.entity';

@Injectable()
export class GenresService {
    constructor(
        @InjectRepository(Genre)
        private readonly genresRepository: Repository<Genre>,
    ) {}

    create(createGenreDto: CreateGenreDto): Promise<Genre> {
        const genre = new Genre();
        genre.genreId = createGenreDto.genreId;

        return this.genresRepository.save(genre);
    }

    async findAll(): Promise<Genre[]> {
        return this.genresRepository.find();
    }

    findOne(id: string): Promise<Genre> {
        return this.genresRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.genresRepository.delete(id);
    }
}