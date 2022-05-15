import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/users.entity';
import { Repository } from 'typeorm';
import { PasswordEntity } from './passwords.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(PasswordEntity)
    private passwordRepo: Repository<PasswordEntity>,
  ) {}

  async createPasswordForNewUser(
    password: string,
    user: UserEntity,
  ): Promise<PasswordEntity> {
    const existingUser = await this.passwordRepo.findOne({
      where: {
        userId: user.id,
      },
    });
    if (existingUser) {
      throw new UnauthorizedException(
        'This user already exists hence password cannot be created',
      );
    }

    const newPassword = new PasswordEntity();
    newPassword.user = user;
    newPassword.password = password;
    return await this.passwordRepo.save(newPassword);
  }
}
