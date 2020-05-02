import { Role } from "src/roles/role.entity";

export class CreateUserDto {
    // userId: number;

    email: string;

    password: string;

    firstName: string;

    lastName: string;

    role: Role;

    createdAt: Date;
}