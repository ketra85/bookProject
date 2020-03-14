import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './book.entity';

@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(Book)
        private readonly booksRepository: Repository<Book>,
    ) {}

    create(createBookDto: CreateBookDto): Promise<Book> {
        const book = new Book();
        book.bookId = createBookDto.bookId;

        return this.booksRepository.save(book);
    }

    async findAll(): Promise<Book[]> {
        return this.booksRepository.find();
    }

    findOne(id: string): Promise<Book> {
        return this.booksRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.booksRepository.delete(id);
    }
}