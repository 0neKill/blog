import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { AuthenticationEntity } from '../../../authentication/entities';

@Entity('user')
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'character varying', nullable: false })
    email: string;

    @Column({ type: 'character varying', nullable: false })
    name: string;

    @Column({ type: 'integer', nullable: false })
    authentication_id: number;

    @OneToOne(() => AuthenticationEntity)
    @JoinColumn({ name: 'authentication_id' })
    authentication: AuthenticationEntity;
}