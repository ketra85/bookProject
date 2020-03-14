import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'; 

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
    typeId: number;
    
    @Column()
    pages: number;
    
    @Column()
    price: number;
    
    @Column()
    cdnLink: string;
    
    @Column()
    createdAt: Date;
}