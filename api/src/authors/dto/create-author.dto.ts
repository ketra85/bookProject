import { Book } from "src/books/book.entity";

export class CreateAuthorDto {
    authorId: number;

    firstName: string;
    
    lastName: string;
    
    email: string;

    books: Book[];
}