
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PublishersService } from './publishers.service';
import { CreatePublisherDto } from './dto/create-publisher.dto';
import { Publisher } from './publisher.entity';

@Controller('publishers')
export class PublishersController {
    constructor(private readonly publishersService: PublishersService) {}

    @Post()
    create(@Body() createPublisherDto: CreatePublisherDto): Promise<Publisher> {
        return this.publishersService.create(createPublisherDto);
    }

    @Get()
    findAll(): Promise<Publisher[]> {
        return this.publishersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Publisher> {
        return this.publishersService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.publishersService.remove(id);
    }
}