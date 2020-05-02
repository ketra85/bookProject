import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from 'typeorm'; 
import { User } from 'src/users/user.entity';

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    roleId: number;

    @Column()
    roleName: string;

    @Column()
    description: string;

    @OneToOne(type => User, user => user.role)
    user: User;
}