
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { GenresService } from './genres.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { Genre } from './genre.entity';

@Controller('genres')
export class GenresController {
    constructor(private readonly genresService: GenresService) {}

    @Post()
    create(@Body() createGenreDto: CreateGenreDto): Promise<Genre> {
        return this.genresService.create(createGenreDto);
    }

    @Get()
    findAll(): Promise<Genre[]> {
        return this.genresService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Genre> {
        return this.genresService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.genresService.remove(id);
    }
}