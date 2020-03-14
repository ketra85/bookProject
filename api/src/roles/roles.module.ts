import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { Role } from './role.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Role])],
    providers: [RolesService],
    controllers: [RolesController],
})

export class RolesModule {}