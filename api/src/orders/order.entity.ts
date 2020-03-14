import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'; 

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
}