import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm'; 
import { Book } from 'src/books/book.entity';

@Entity()
export class Genre {
    @PrimaryGeneratedColumn()
    genreId: number;

    @Column()
    genreName: string;

    @ManyToMany(type => Book)
    @JoinTable()
    books: Book[];
}