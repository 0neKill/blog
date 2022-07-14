import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('authentication')
export class AuthenticationEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'character varying', nullable: false })
    password: string;
}