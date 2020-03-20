import { Book } from 'src/books/book.entity';
export declare class Publisher {
    publisherId: number;
    publisherName: string;
    email: string;
    phone: number;
    books: Book[];
}
