import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'; 

@Entity()
export class Permission {
    @PrimaryGeneratedColumn()
    permissionId: number;

    @Column()
    permissionName: string;

    @Column()
    description: string;
}