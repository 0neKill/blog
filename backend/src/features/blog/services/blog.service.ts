import { Injectable } from '@nestjs/common';
import { BlogRepository } from '../repositories';
import { CreateDto } from '../__types__/dto';
import { UserId } from '../../user/__types__';
import { BlogEntity, Categories, PostId } from '../entities';
import { Like } from 'typeorm';

@Injectable()
export class BlogService {

    private readonly _blogRepository: BlogRepository;

    constructor(blogRepository: BlogRepository) {
        this._blogRepository = blogRepository;
    }

    public async create(userId: UserId, dto: CreateDto): Promise<BlogEntity> {
        return this._blogRepository.create({
            user_id: userId,
            title: dto.title,
            category: dto.category,
            text: dto.text,
        });
    }

    public async getUserPosts(userId: UserId): Promise<BlogEntity[]> {
        return await this._blogRepository.getPosts([{ user_id: userId }], [], ['user']);
    }

    public async getAll(category: Categories, query: string): Promise<BlogEntity[]> {
        if (Object.values(Categories).includes(category)) {
            return await this._blogRepository.getPosts([
                {
                    category: category,
                    title: Like(`%${query}%`),
                },
                {
                    category: category,
                    text: Like(`%${query}%`),
                },
                !query && {
                    category: category,
                },
            ], [], ['user']);
        }
        return await this._blogRepository.getPosts(query ? [
            { title: Like(`%${query}%`) },
            { text: Like(`%${query}%`) },
        ] : {}, [], ['user']);
    }

    public async deletePost(userId: UserId, postId: PostId): Promise<boolean> {
        return await this._blogRepository.delete({ user_id: userId, id: postId });
    }
}
