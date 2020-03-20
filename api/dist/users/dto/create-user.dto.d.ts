import { Order } from "src/orders/order.entity";
import { Role } from "src/roles/role.entity";
export declare class CreateUserDto {
    userId: number;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    orders: Order[];
    role: Role;
    createdAt: Date;
}
