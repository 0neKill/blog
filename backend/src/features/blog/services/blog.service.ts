import { Injectable } from '@nestjs/common';
import { BlogRepository } from '../repositories';

@Injectable()
export class BlogService {

    private readonly _blogRepository: BlogRepository;

    constructor(blogRepository: BlogRepository) {
        this._blogRepository = blogRepository;
    }
}