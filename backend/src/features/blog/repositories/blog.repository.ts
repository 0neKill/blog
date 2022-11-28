import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BlogEntity } from '../entities';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BlogRepository {
    private readonly _blogEntity: Repository<BlogEntity>;

    constructor(@InjectRepository(BlogEntity) blogEntity: Repository<BlogEntity>) {
        this._blogEntity = blogEntity;
    }


}