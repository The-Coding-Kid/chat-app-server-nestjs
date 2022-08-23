import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostDocument = Post & Document;
@Schema()
export class Post {
  @Prop({ required: true })
  content: string;

  @Prop()
  image: string;

  @Prop()
  createdByEmail: string;

  @Prop()
  createdByName: string;

  @Prop()
  profile_photo: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ required: true })
  group_posted_in: string;

  @Prop({ default: [] })
  comments: string[];

  @Prop({ default: 0 })
  likes: number;

  @Prop({ default: [] })
  liked_by: string[];
}

export const PostSchema = SchemaFactory.createForClass(Post);
