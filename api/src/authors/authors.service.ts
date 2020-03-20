import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAuthorDto } from './dto/create-author.dto';
import { Author } from './author.entity';

@Injectable()
export class AuthorsService {
    constructor(
        @InjectRepository(Author)
        private readonly authorsRepository: Repository<Author>,
    ) {}

    create(createAuthorDto: CreateAuthorDto): Promise<Author> {
        const author = new Author();
        author.authorId = createAuthorDto.authorId;

        return this.authorsRepository.save(author);
    }

    async findAll(): Promise<Author[]> {
        return this.authorsRepository.find();
    }

    findOne(id: string): Promise<Author> {
        return this.authorsRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.authorsRepository.delete(id);
    }
}