import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserId } from '../../user/__types__';
import { UserEntity } from '../../user/entity';

export enum Categories { 'UI Design' = 'UI Design', 'Front-end' = 'Front-end', 'Back-end' = 'Back-end'}


export type PostId = number;

@Entity('blog')
export class BlogEntity {
    @PrimaryGeneratedColumn()
    id: PostId;

    @Column({ type: 'character varying', nullable: false })
    title: string;

    @Column({ type: 'character varying', nullable: false })
    text: string;

    @Column({ type: 'enum', nullable: false, enum: Categories })
    category: Categories;

    @Column({ type: 'integer', nullable: false })
    user_id: UserId;

    @ManyToOne(() => UserEntity)
    @JoinColumn({ name: 'user_id' })
    user: UserEntity;

    @CreateDateColumn()
    created_at: Date;
}
