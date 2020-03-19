import { Author } from '../../authors/author.entity';
import { Genre } from '../../genres/genre.entity';
import { Type } from 'src/types/type.entity';

export class CreateBookDto {
    bookId: number;

    title: string;
    
    description: string;
        
    publisherId: number;

    publishedYear: Date;

    authors: Author[];
        
    pages: number;

    genres: Genre[];

    type: Type;
    
    price: number;
    
    cdnLink: string;

    createdAt: Date;
}