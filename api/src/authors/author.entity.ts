import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'; 

@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    authorId: number;

    @Column()
    firstName: string;
    
    @Column()
    lastName: string;
    
    @Column()
    email: number;
}