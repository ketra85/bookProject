import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { SearchService } from './elasticsearch.service';

@Module({
    imports: [
        ElasticsearchModule.register({
            node: 'localhost:9000',
    })],
    providers: [SearchService],    
})

export class SearchModule {}