import { ElasticsearchService } from '@nestjs/elasticsearch';
export declare class SearchService {
    private readonly elasticsearchservice;
    constructor(elasticsearchservice: ElasticsearchService);
    searchIndex(userQuery: string): Promise<import("@elastic/elasticsearch").ApiResponse<any, any>>;
}
