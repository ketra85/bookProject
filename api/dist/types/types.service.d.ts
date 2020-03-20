import { Repository } from 'typeorm';
import { CreateTypeDto } from './dto/create-type.dto';
import { Type } from './type.entity';
export declare class TypesService {
    private readonly typesRepository;
    constructor(typesRepository: Repository<Type>);
    create(createTypeDto: CreateTypeDto): Promise<Type>;
    findAll(): Promise<Type[]>;
    findOne(id: string): Promise<Type>;
    remove(id: string): Promise<void>;
}
