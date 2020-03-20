import { Column, Entity, PrimaryGeneratedColumn, JoinTable, ManyToMany, OneToOne, ManyToOne } from 'typeorm'; 
import { Author } from '../authors/author.entity';
import { Genre } from '../genres/genre.entity';
import { Type } from '../types/type.entity';
import { Order } from '../orders/order.entity';
import { Publisher } from 'src/publishers/publisher.entity';

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    bookId: number;

    @Column()
    title: string;
    
    @Column()
    description: string;
    
    @Column()
    publisherId: number;
    
    @Column()
    publishedYear: Date;
    
    @Column()
    pages: number;
    
    @Column()
    price: number;
    
    @Column()
    cdnLink: string;
    
    @Column()
    createdAt: Date;

    @ManyToMany(type => Author)
    @JoinTable()
    authors: Author[];

    @ManyToOne(type => Publisher, publisher => publisher.books)
    publisher: Publisher;

    @ManyToMany(type => Genre)
    @JoinTable()
    genres: Genre[];

    @OneToOne(type => Type)
    type: Type;

    @ManyToMany(type => Order)
    @JoinTable()
    orders: Order[];
}