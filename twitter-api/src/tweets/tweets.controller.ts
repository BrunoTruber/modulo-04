/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { Tweet, User } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';
import AuthUser from '../common/decorators/auth-user.decorator';
import { PostTweetDto } from './dto/create-tweets.dto';
import { TweetsService } from './tweets.service';

@UseGuards(AuthGuard('jwt'))
@Controller('tweets')
export class TweetsController {
  constructor(private service: TweetsService) {}

  @Get()
  find(@Query('username') username: string): Promise<Tweet[]> {
    return this.service.find(username);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Tweet> {
    return this.service.findOne(id);
  }

  @Post()
  post(@Body() data: PostTweetDto, @AuthUser() user: User): Promise<Tweet> {
    return this.service.post(user.username, data);
  }

  @Delete(':id')
  delete(@Param('id') id: number, @AuthUser() user: User): Promise<Tweet> {
    return this.service.delete(user.username, id);
  }
}