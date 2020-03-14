
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './role.entity';

@Controller('roles')
export class RolesController {
    constructor(private readonly rolesService: RolesService) {}

    @Post()
    create(@Body() createRoleDto: CreateRoleDto): Promise<Role> {
        return this.rolesService.create(createRoleDto);
    }

    @Get()
    findAll(): Promise<Role[]> {
        return this.rolesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Role> {
        return this.rolesService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.rolesService.remove(id);
    }
}