import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm'; 
import { Book } from 'src/books/book.entity';

@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    authorId: number;

    @Column()
    firstName: string;
    
    @Column()
    lastName: string;
    
    @Column()
    email: string;

    @ManyToMany(type => Book)
    @JoinTable()
    books: Book[];
}