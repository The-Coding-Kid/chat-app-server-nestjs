import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostDocument } from './schema/post.schema';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Model } from 'mongoose';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name) private readonly postModel: Model<PostDocument>,
  ) {}

  // Create a new post
  async create(@Body() body: any): Promise<Post> {
    const createdPost = new this.postModel(body);
    return await createdPost.save();
  }

  // Get all posts
  async findAll(): Promise<Post[]> {
    console.log('Getting all posts');
    return await this.postModel.find().exec();
  }

  // Get a post by id
  async findOne(@Body() body: any): Promise<Post> {
    return await this.postModel.findById(body.id).exec();
  }

  // Update a post
  // async update(id: number, updatePostDto: UpdatePostDto) {
  //   return `This action updates a #${id} post`;
  // }

  // Delete a post
  async remove(@Body() body: any): Promise<any> {
    return await this.postModel.findByIdAndRemove(body.id).exec();
  }
}
