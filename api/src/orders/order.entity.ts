import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm'; 
import { User } from '../users/user.entity';
import { Book } from 'src/books/book.entity';

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    orderId: number;

    @Column()
    status: boolean;

    @Column()
    createdAt: Date;

    @Column()
    total: number;

    @ManyToOne(type => User, user => user.orders)
    user: User;

    @ManyToMany(type => Book)
    @JoinTable()
    books: Book[];
}