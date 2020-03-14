
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { Author } from './author.entity';

@Controller('authors')
export class AuthorsController {
    constructor(private readonly authorsService: AuthorsService) {}

    @Post()
    create(@Body() createAuthorDto: CreateAuthorDto): Promise<Author> {
        return this.authorsService.create(createAuthorDto);
    }

    @Get()
    findAll(): Promise<Author[]> {
        return this.authorsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Author> {
        return this.authorsService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.authorsService.remove(id);
    }
}