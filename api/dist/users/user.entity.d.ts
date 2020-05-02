import { Order } from '../orders/order.entity';
import { Role } from '../roles/role.entity';
export declare class User {
    userId: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    createdAt: Date;
    orders: Order[];
    role: Role;
}
