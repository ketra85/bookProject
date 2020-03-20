import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinTable } from 'typeorm'; 
import { Book } from 'src/books/book.entity';

@Entity()
export class Publisher {
    @PrimaryGeneratedColumn()
    publisherId: number;

    @Column()
    publisherName: string;
    
    @Column()
    email: string;
    
    @Column()
    phone: number;

    @OneToMany(type => Book, book => book.publisher)
    @JoinTable()
    books: Book[];
}