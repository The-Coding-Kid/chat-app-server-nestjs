import {
  Controller,
  Get,
  Post,
  Body,
  Request,
  Response,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { response } from 'express';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post('/create')
  async create(@Body() createPostDto: CreatePostDto) {
    console.log(createPostDto);
    const newPost = await this.postsService.create(createPostDto);
    return newPost;
  }

  @Get()
  async findAll() {
    console.log('Getting All Posts');
    const allPosts = await this.postsService.findAll();
    return allPosts;
  }

  @Post('/get')
  async findOne(@Body() body: any) {
    const res = await this.postsService.findOne(body.body.id);
    return res;
  }

  @Post('/getlist')
  async getList(@Body() body: any) {
    const { id } = body;
    const response = [];
    for (let i = 0; i < id.length; i++) {
      const post = await this.postsService.findOne(id[i]);
      response.push(post);
    }
    return response;
  }
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
  //   return this.postsService.update(+id, updatePostDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.postsService.remove(+id);
  // }

  @Post('/like')
  async addLike(@Body() body: any) {
    const { email, post_id } = body;
    const post = await this.postsService.addLike(email, post_id);
    return post;
  }
}
