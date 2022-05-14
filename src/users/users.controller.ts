import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserEntity } from './users.entity';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('/@:username')
  async getUserByUsername(
    @Param('username') username: string,
  ): Promise<UserEntity> {
    const user = await this.userService.getUserByUsername(username);
    if (!user) {
      throw new NotFoundException('The user does not exists');
    }
    return user;
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
  followUser(@Param('userid') userid: string) {
    return `following user`;
  }

  @Delete('/:userid/follow')
  unfollowUser(@Param('userid') userid: string) {
    return `Unfolow user`;
  }

  @Get('/:userid/followers')
  getFollowersOfUser(@Param('userid') userid: string) {
    return `Get followers for user`;
  }

  @Put('/:userid/followees')
  getFolloweesOfUser(@Param('userid') userid: string) {
    return `Get followees of user`;
  }
}
