import { Book } from "src/books/book.entity";
export declare class CreatePublisherDto {
    publisherId: number;
    publisherName: string;
    email: string;
    phone: number;
    books: Book[];
}
