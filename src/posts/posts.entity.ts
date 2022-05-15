import { BaseEntity } from '../commons/base.entity';
import { UserEntity } from '../users/users.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

@Entity('posts')
export class Post extends BaseEntity {
  @Column({
    length: 240,
  })
  text: string;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'author_id' })
  authorId: UserEntity;

  @Column('json', { default: [] })
  images: Array<string>;

  @Column({
    name: 'like_count',
    default: 0,
  })
  likesCount: number;

  @Column({
    name: 'repost_count',
    default: 0,
  })
  repostCount: number;

  @Column('json', { default: [] })
  hashtags: Array<number>;

  @Column('json', { default: [] })
  mentions: Array<Mention>;

  @OneToOne(() => Post)
  @JoinColumn({
    name: 'orig_post_id',
  })
  origPost: Post;

  @OneToOne(() => Post)
  @JoinColumn({
    name: 'reply_to_id',
  })
  replyTo: Post;
}

class Mention {
  name: string;
  id: string;
}
