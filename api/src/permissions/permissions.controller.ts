
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { Permission } from './permission.entity';

@Controller('permissions')
export class PermissionsController {
    constructor(private readonly permissionsService: PermissionsService) {}

    @Post()
    create(@Body() createPermissionDto: CreatePermissionDto): Promise<Permission> {
        return this.permissionsService.create(createPermissionDto);
    }

    @Get()
    findAll(): Promise<Permission[]> {
        return this.permissionsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Permission> {
        return this.permissionsService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.permissionsService.remove(id);
    }
}