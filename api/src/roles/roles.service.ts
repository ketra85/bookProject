import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './role.entity';

@Injectable()
export class RolesService {
    constructor(
        @InjectRepository(Role)
        private readonly rolesRepository: Repository<Role>,
    ) {}

    create(createRoleDto: CreateRoleDto): Promise<Role> {
        const role = new Role();
        role.roleId = createRoleDto.roleId;

        return this.rolesRepository.save(role);
    }

    async findAll(): Promise<Role[]> {
        return this.rolesRepository.find();
    }

    findOne(id: string): Promise<Role> {
        return this.rolesRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.rolesRepository.delete(id);
    }
}