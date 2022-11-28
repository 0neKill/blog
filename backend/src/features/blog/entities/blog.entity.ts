import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserId } from '../../user/__types__';
import { UserEntity } from '../../user/entity';

export type Categories = 'UI Design' | 'Front-end' | 'Back-end';

@Entity('blog')
export class BlogEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'character varying', nullable: false })
    title: string;

    @Column({ type: 'character varying', nullable: false })
    category: Categories;

    @Column({ type: 'integer', nullable: false })
    user_id: UserId;

    @ManyToOne(() => UserEntity)
    @JoinColumn({ name: 'user_id' })
    user: UserEntity;

    @CreateDateColumn()
    created_at: Date;
}