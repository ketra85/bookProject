import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePublisherDto } from './dto/create-publisher.dto';
import { Publisher } from './publisher.entity';

@Injectable()
export class PublishersService {
    constructor(
        @InjectRepository(Publisher)
        private readonly publishersRepository: Repository<Publisher>,
    ) {}

    create(createPublisherDto: CreatePublisherDto): Promise<Publisher> {
        const publisher = new Publisher();
        publisher.publisherId = createPublisherDto.publisherId;

        return this.publishersRepository.save(publisher);
    }

    async findAll(): Promise<Publisher[]> {
        return this.publishersRepository.find();
    }

    findOne(id: string): Promise<Publisher> {
        return this.publishersRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.publishersRepository.delete(id);
    }
}