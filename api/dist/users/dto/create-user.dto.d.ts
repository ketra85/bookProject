import { Role } from "src/roles/role.entity";
export declare class CreateUserDto {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: Role;
    createdAt: Date;
}
