import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorsController} from './authors.controller';
import { AuthorsService } from './authors.service';
import { Author } from './author.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Author])],
    providers: [AuthorsService],
    controllers: [AuthorsController],
})

export class AuthorsModule {}