import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'; 

@Entity()
export class Genre {
    @PrimaryGeneratedColumn()
    genreId: number;

    @Column()
    genreName: string;
}