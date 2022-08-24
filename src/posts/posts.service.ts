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
  async create(createPostDto: CreatePostDto): Promise<Post> {
    const createdPost = new this.postModel(createPostDto);
    return await createdPost.save();
  }

  // Get all posts
  async findAll(): Promise<Post[]> {
    return await this.postModel.find().exec();
  }

  // Get a post by id
  async findOne(id: string): Promise<Post> {
    return await this.postModel.findOne({ _id: id }).exec();
  }

  // Update a post
  // async update(id: number, updatePostDto: UpdatePostDto) {
  //   return `This action updates a #${id} post`;
  // }

  // Delete a post
  async remove(id: string): Promise<any> {
    return await this.postModel.findByIdAndRemove(id).exec();
  }

  async addLike(email: string, post_id: string): Promise<any> {
    const post = await this.postModel.findOne({ _id: post_id }).exec();
    post.liked_by.push(email);
    post.likes = post.liked_by.length;
    return await post.save();
  }
}
