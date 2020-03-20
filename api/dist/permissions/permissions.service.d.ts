import { Repository } from 'typeorm';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { Permission } from './permission.entity';
export declare class PermissionsService {
    private readonly permissionsRepository;
    constructor(permissionsRepository: Repository<Permission>);
    create(createPermissionDto: CreatePermissionDto): Promise<Permission>;
    findAll(): Promise<Permission[]>;
    findOne(id: string): Promise<Permission>;
    remove(id: string): Promise<void>;
}
