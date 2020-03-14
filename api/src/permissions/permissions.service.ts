import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { Permission } from './permission.entity';

@Injectable()
export class PermissionsService {
    constructor(
        @InjectRepository(Permission)
        private readonly permissionsRepository: Repository<Permission>,
    ) {}

    create(createPermissionDto: CreatePermissionDto): Promise<Permission> {
        const permission = new Permission();
        permission.permissionId = createPermissionDto.permissionId;

        return this.permissionsRepository.save(permission);
    }

    async findAll(): Promise<Permission[]> {
        return this.permissionsRepository.find();
    }

    findOne(id: string): Promise<Permission> {
        return this.permissionsRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.permissionsRepository.delete(id);
    }
}