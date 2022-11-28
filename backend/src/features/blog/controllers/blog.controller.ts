import { Body, Controller, Delete, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { BlogService } from '../services';
import { BlogEntity, Categories, PostId } from '../entities';
import { AuthenticationGuard, GetUserId } from '../../../common';
import { UserId } from '../../user/__types__';
import { CreatePipe } from '../pipes';
import { CreateDto } from '../__types__/dto';

@Controller('/blog')
export class BlogController {
    private readonly _blogService: BlogService;

    constructor(blogService: BlogService) {
        this._blogService = blogService;
    }

    @Get('/all')
    allPosts(@Query('category') category: Categories, @Query('query') query: string): Promise<BlogEntity[]> {
        console.log(category);
        return this._blogService.getAll(category, query);
    }

    @UseGuards(AuthenticationGuard)
    @Get('/by_user')
    getUserPosts(@GetUserId() userId: UserId): Promise<BlogEntity[]> {
        return this._blogService.getUserPosts(userId);
    }

    @UseGuards(AuthenticationGuard)
    @Post('/create')
    create(@GetUserId() userId: UserId, @Body(CreatePipe) dto: CreateDto): Promise<BlogEntity> {
        return this._blogService.create(userId, dto);
    }

    @UseGuards(AuthenticationGuard)
    @Delete('/delete/:id')
    deletePost(@GetUserId() userId: UserId, @Param('id') postId: PostId): Promise<Boolean> {
        return this._blogService.deletePost(userId, postId);
    }
}
