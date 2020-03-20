import { TypesService } from './types.service';
import { CreateTypeDto } from './dto/create-type.dto';
import { Type } from './type.entity';
export declare class TypesController {
    private readonly typesService;
    constructor(typesService: TypesService);
    create(createTypeDto: CreateTypeDto): Promise<Type>;
    findAll(): Promise<Type[]>;
    findOne(id: string): Promise<Type>;
    remove(id: string): Promise<void>;
}
