import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'; 

@Entity()
export class Type {
    @PrimaryGeneratedColumn()
    typeId: number;

    @Column()
    typeName: string;
}