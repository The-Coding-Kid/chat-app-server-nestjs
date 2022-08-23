import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { GroupsModule } from './groups/groups.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [PostsModule, GroupsModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
