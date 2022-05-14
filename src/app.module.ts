import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { PostsController } from './posts/posts.controller';
import { HashtagsController } from './hashtags/hashtags.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/users.entity';
import { Post } from './posts/posts.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: 'faizalvasaya',
      database: 'twitter',
      synchronize: true,
      logger: 'advanced-console',
      logging: 'all',
      entities: [User, Post],
    }),
  ],
  controllers: [
    AppController,
    UsersController,
    PostsController,
    HashtagsController,
  ],
  providers: [AppService],
})
export class AppModule {}
