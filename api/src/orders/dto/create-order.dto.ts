import { Book } from "src/books/book.entity";

export class CreateOrderDto {
    orderId: number;

    status: boolean;

    books: Book[];

    createdAt: Date;

    total: number;
}