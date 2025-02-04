
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './book.entity';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @Post()
    create(@Body() createBookDto: CreateBookDto): Promise<Book> {
        return this.booksService.create(createBookDto);
    }

    @Get()
    findAll(): Promise<Book[]> {
        return this.booksService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Book> {
        return this.booksService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.booksService.remove(id);
    }
}