
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TypesService } from './types.service';
import { CreateTypeDto } from './dto/create-type.dto';
import { Type } from './type.entity';

@Controller('types')
export class TypesController {
    constructor(private readonly typesService: TypesService) {}

    @Post()
    create(@Body() createTypeDto: CreateTypeDto): Promise<Type> {
        return this.typesService.create(createTypeDto);
    }

    @Get()
    findAll(): Promise<Type[]> {
        return this.typesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Type> {
        return this.typesService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.typesService.remove(id);
    }
}