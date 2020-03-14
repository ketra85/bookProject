import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTypeDto } from './dto/create-type.dto';
import { Type } from './type.entity';

@Injectable()
export class TypesService {
    constructor(
        @InjectRepository(Type)
        private readonly typesRepository: Repository<Type>,
    ) {}

    create(createTypeDto: CreateTypeDto): Promise<Type> {
        const type = new Type();
        type.typeId = createTypeDto.typeId;

        return this.typesRepository.save(type);
    }

    async findAll(): Promise<Type[]> {
        return this.typesRepository.find();
    }

    findOne(id: string): Promise<Type> {
        return this.typesRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.typesRepository.delete(id);
    }
}