import { Injectable } from '@nestjs/common';
import { UserEntity } from './users.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private userRepo: UsersRepository) {}
  // TODO: Handle password
  public async getUserByUsername(username: string): Promise<UserEntity> {
    return await this.userRepo.findOne({
      where: {
        username,
      },
    });
  }

  public async getUserByUserid(userid: string): Promise<UserEntity> {
    return await this.userRepo.findOne({
      where: {
        id: userid,
      },
    });
  }

  public async createUser(user: Partial<UserEntity>): Promise<UserEntity> {
    return await this.userRepo.save(user);
  }

  public async updateUser(
    id: string,
    user: Partial<UserEntity>,
  ): Promise<UserEntity> {
    const existingUser = await this.userRepo.findOne({
      where: {
        id,
      },
    });
    if (!existingUser) {
      return null;
    }
    if (user.bio) existingUser.bio = user.bio;
    if (user.avatar) existingUser.avatar = user.avatar;
    if (user.name) existingUser.name = user.name;

    return await this.userRepo.save(existingUser);
  }
}
