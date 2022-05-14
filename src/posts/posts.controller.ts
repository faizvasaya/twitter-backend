import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get('/')
  getAllPosts(): string {
    return `get all posts`;
  }

  @Get('/:postid')
  getPostById(@Param('postid') postId: string): string {
    return `get post by id ${postId}`;
  }

  @Post('/')
  createNewPost(): string {
    return `New posts`;
  }

  @Delete('/:postid')
  deletePost(@Param('postid') postId: string): string {
    return `Delete post ${postId}`;
  }

  @Put('/:postid/like')
  likePost(@Param('postid') postId: string) {
    return `Like post ${postId}`;
  }

  @Delete('/:postid/like')
  unlikePost(@Param('postid') postId: string) {
    return `Unlike post ${postId}`;
  }
}
