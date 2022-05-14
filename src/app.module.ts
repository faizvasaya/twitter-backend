import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController } from './posts/posts.controller';
import { HashtagsController } from './hashtags/hashtags.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/users.entity';
import { Post } from './posts/posts.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: 'faizalvasaya',
      database: 'twitter',
      synchronize: true,
      logger: 'advanced-console',
      logging: 'all',
      entities: [UserEntity, Post],
    }),
    UsersModule,
  ],
  controllers: [AppController, PostsController, HashtagsController],
  providers: [AppService],
})
export class AppModule {}
