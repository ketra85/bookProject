import { User } from 'src/users/user.entity';
export declare class Role {
    roleId: number;
    roleName: string;
    description: string;
    user: User;
}
