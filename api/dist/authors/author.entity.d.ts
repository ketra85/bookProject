import { Book } from 'src/books/book.entity';
export declare class Author {
    authorId: number;
    firstName: string;
    lastName: string;
    email: string;
    books: Book[];
}
