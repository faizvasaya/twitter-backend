import { BaseEntity } from '../commons/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('users')
export class UserEntity extends BaseEntity {
  @Column({
    length: 30,
    nullable: false,
    unique: true,
  })
  username: string;

  @Column({
    length: 50,
    nullable: true,
  })
  name: string;
  @Column({
    nullable: true,
    length: 240,
  })
  avatar: string;

  @Column({
    length: 240,
  })
  bio: string;

  @Column({
    name: 'follower_count',
    default: 0,
  })
  followerCount: number;

  @Column({
    name: 'followee_count',
    default: 0,
  })
  followeeCount: number;
  @Column('boolean', {
    default: false,
  })
  verified: boolean;
}
