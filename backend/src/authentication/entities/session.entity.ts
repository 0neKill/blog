import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from '../../features/user/entity';

@Entity('session')
export class SessionEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'character varying', nullable: false })
    refresh_id: string;

    @Column({ type: 'character varying', nullable: false })
    access_id: string;

    @Column({ type: 'integer', nullable: false })
    user_id: number;

    @ManyToOne(() => UserEntity)
    @JoinColumn({ name: 'user_id' })
    user: UserEntity;

}
