import { Injectable } from "@nestjs/common";
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class SearchService {
    constructor(private readonly elasticsearchservice: ElasticsearchService) {}

    async searchIndex(userQuery: string) {
        const body = {
            size: 200,
            from: 0,
            query: {
                match: {
                    url: userQuery,
                }
            }
        };
        return await this.elasticsearchservice.search(); 

    }
}