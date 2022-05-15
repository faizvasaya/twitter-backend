import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/users.entity';
import { Post } from './posts/posts.entity';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { HashtagsModule } from './hashtags/hashtags.module';

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
    PostsModule,
    HashtagsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
