import { Body, Controller, Get, Put, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { IFile, User, UserId } from '../__types__';
import { UserService } from '../service';
import { AuthenticationGuard, GetUserId } from '../../../common';
import { FileTypeValidatePipe } from '../../utils/file/pipes';

@Controller('/user')
export class UserController {

    private readonly _userService: UserService;


    constructor(userService: UserService) {
        this._userService = userService;
    }

    @UseGuards(AuthenticationGuard)
    @Get('/profile')
    public async getProfile(@GetUserId() userId: UserId): Promise<User> {
        return this._userService.getUser(userId);
    }

    @UseGuards(AuthenticationGuard)
    @Put('/set_avatar')
    @UseInterceptors(FileInterceptor('avatar'))
    public async setAvatar(@GetUserId() userId: UserId, @UploadedFile(FileTypeValidatePipe) avatar: IFile): Promise<boolean> {
        return this._userService.setAvatar(userId, avatar);
    }

}