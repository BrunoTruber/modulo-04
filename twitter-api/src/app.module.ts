import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { FollowModule } from './follow/follow.module';

@Module({
  imports: [UsersModule, AuthModule, FollowModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
