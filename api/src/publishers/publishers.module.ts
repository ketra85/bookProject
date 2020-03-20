import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublishersController} from './publishers.controller';
import { PublishersService } from './publishers.service';
import { Publisher } from './publisher.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Publisher])],
    providers: [PublishersService],
    controllers: [PublishersController],
})

export class PublishersModule {}