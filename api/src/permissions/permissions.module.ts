import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionsController } from './permissions.controller';
import { PermissionsService } from './permissions.service';
import { Permission } from './permission.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Permission])],
    providers: [PermissionsService],
    controllers: [PermissionsController],
})

export class PermissionsModule {}