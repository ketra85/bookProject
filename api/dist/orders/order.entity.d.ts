import { User } from '../users/user.entity';
import { Book } from 'src/books/book.entity';
export declare class Order {
    orderId: number;
    status: boolean;
    createdAt: Date;
    total: number;
    user: User;
    books: Book[];
}
