import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenresController} from './genres.controller';
import { GenresService } from './genres.service';
import { Genre } from './genre.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Genre])],
    providers: [GenresService],
    controllers: [GenresController],
})

export class GenresModule {}