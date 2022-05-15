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
import {
  ApiBody,
  ApiProperty,
  ApiPropertyOptional,
  ApiTags,
} from '@nestjs/swagger';
import { UserEntity } from './users.entity';
import { UsersService } from './users.service';

export class UserCreateRequestBody {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
  @ApiPropertyOptional()
  name?: string;
  @ApiPropertyOptional()
  avatar?: string;
  @ApiPropertyOptional()
  bio?: string;
}

export class UserUpdateRequestBody {
  @ApiProperty()
  password: string;
  @ApiPropertyOptional()
  name?: string;
  @ApiPropertyOptional()
  avatar?: string;
  @ApiPropertyOptional()
  bio?: string;
}

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
  async getUserByUserid(@Param('userid') userid: string): Promise<UserEntity> {
    const user = await this.userService.getUserByUserid(userid);
    if (!user) {
      throw new NotFoundException('The user does not exists');
    }
    return user;
  }

  @ApiBody({
    type: UserCreateRequestBody,
  })
  @Post('/')
  async createNewUser(
    @Body() createUser: UserCreateRequestBody,
  ): Promise<UserEntity> {
    const user = await this.userService.createUser(
      createUser,
      createUser.password,
    );
    return user;
  }

  // TODO: Requires authentication
  @ApiBody({
    type: UserUpdateRequestBody,
  })
  @Patch('/:userid')
  async updateUserDetails(
    @Param('userid') userid: string,
    @Body() body: UserUpdateRequestBody,
  ): Promise<UserEntity> {
    const user = await this.userService.updateUser(userid, body);
    return user;
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
