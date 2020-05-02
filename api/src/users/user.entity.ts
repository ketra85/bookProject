import { Column, Entity, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinTable, JoinColumn } from 'typeorm'; 
import { Order } from '../orders/order.entity';
import { Role } from '../roles/role.entity';
import {Contains, Length, IsEmail, IsDate, Min, Max} from "class-validator";

// Verify whether you want permissions or not
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column()
    @IsEmail()
    email: string;

    @Column()
    @Min(8)
    @Max(32)
    password: string;

    @Column()
    @Length(100)
    firstName: string;

    @Column()
    @Length(100)
    lastName: string;

    @Column()
    @IsDate()
    createdAt: Date;
    
    @OneToMany(type => Order, order => order.user)
    orders: Order[];

    @OneToOne(type => Role, role => role.user)
    @JoinColumn()
    role: Role;
}