import { Author } from '../authors/author.entity';
import { Genre } from '../genres/genre.entity';
import { Type } from '../types/type.entity';
import { Order } from '../orders/order.entity';
import { Publisher } from 'src/publishers/publisher.entity';
export declare class Book {
    bookId: number;
    title: string;
    description: string;
    publisherId: number;
    publishedYear: Date;
    pages: number;
    price: number;
    cdnLink: string;
    createdAt: Date;
    authors: Author[];
    publisher: Publisher;
    genres: Genre[];
    type: Type;
    orders: Order[];
}
