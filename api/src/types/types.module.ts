import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypesController} from './types.controller';
import { TypesService } from './types.service';
import { Type } from './type.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Type])],
    providers: [TypesService],
    controllers: [TypesController],
})

export class TypesModule {}