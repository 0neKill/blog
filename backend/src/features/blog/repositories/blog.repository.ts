import { Injectable } from '@nestjs/common';
import { FindOptionsWhere, Repository } from 'typeorm';
import { BlogEntity } from '../entities';
import { InjectRepository } from '@nestjs/typeorm';


type FieldBySearchPosts = Partial<Pick<BlogEntity, 'text' | 'title' | 'category' | 'user_id' | 'user' | 'id' | 'created_at'>>;

@Injectable()
export class BlogRepository {
    private readonly _blogEntity: Repository<BlogEntity>;

    constructor(@InjectRepository(BlogEntity) blogEntity: Repository<BlogEntity>) {
        this._blogEntity = blogEntity;
    }

    public async create(blog: Partial<BlogEntity>): Promise<BlogEntity> {
        return await this._blogEntity.save(blog);
    }

    public async getPosts(field: FindOptionsWhere<FieldBySearchPosts>[] | Object, select?: Array<keyof FieldBySearchPosts>, relations?: Array<'user'>): Promise<BlogEntity[]> {
        return await this._blogEntity.find({ where: field, select: select as any, relations: relations });
    }

    public async delete(field: Partial<BlogEntity>): Promise<boolean> {
        return this._blogEntity.delete(field).then(data => !!data.affected);
    }
}
