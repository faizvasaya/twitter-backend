import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/@:username')
  getUserByUsername(@Param('username') username: string): string {
    // TODO
    return `details of username = ${username}`;
  }

  @Get('/:userid')
  getUserByUserid(@Param('userid') userid: string): string {
    // TODO
    return `details of username = ${userid}`;
  }

  @Post('/')
  createNewUser(@Body() createUser: any): string {
    return `create users`;
  }

  @Patch('/:userid')
  updateUserDetails(@Param('userid') userid: string): string {
    return `Update user with id ${userid}`;
  }

  @Put('/:userid/follow')
  followUser() {
    return `following user`;
  }

  @Delete('/:userid/follow')
  unfollowUser() {
    return `Unfolow user`;
  }

  @Get('/:userid/followers')
  getFollowersOfUser() {
    return `Get followers for user`;
  }

  @Get('/:userid/followees')
  getFolloweesOfUser() {
    return `Get followees of user`;
  }
}
