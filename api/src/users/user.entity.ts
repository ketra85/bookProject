import { Column, Entity, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm'; 
import { Order } from '../orders/order.entity';
import { Role } from '../roles/role.entity';

// Verify whether you want permissions or not
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column()
    userName: string;

    @Column()
    password: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    createdAt: Date;

    @OneToMany(type => Order, order => order.user)
    orders: Order[];

    @OneToOne(type => Role)
    role: Role;
}