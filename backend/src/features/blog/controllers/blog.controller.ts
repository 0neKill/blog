import { Controller } from '@nestjs/common';
import { BlogService } from '../services';

@Controller('/blog')
export class BlogController {
    private readonly _blogService: BlogService;

    constructor(blogService: BlogService) {
        this._blogService = blogService;
    }
}