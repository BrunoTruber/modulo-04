/* eslint-disable prettier/prettier */
import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Tweet } from '@prisma/client';
import { PostTweetDto } from './dto/create-tweets.dto';

@Injectable()
export class TweetsService {
  constructor(private db: PrismaService) {}

  async find(username?: string): Promise<Tweet[]> {
    if (username) {
      const user = await this.db.user.findUnique({
        where: { username },
      });

      if (!user) {
        throw new NotFoundException('a user with this username does not exist');
      }
    }

    const tweets = await this.db.tweet.findMany({
      where: { username },
      orderBy: { createdAt: 'desc' },
    });

    return tweets;
  }

  async findOneTweet(id: number): Promise<Tweet> {
    const tweet = await this.db.tweet.findUnique({ where: { id } });

    if (!tweet) {
      throw new NotFoundException('no tweet found with this id');
    }

    return tweet;
  }

  post(username: string, data: PostTweetDto): Promise<Tweet> {
    return this.db.tweet.create({
      data: {
        ...data,
        user: { connect: { username } },
      },
    });
  }

  async delete( id: number): Promise<void> {
    const tweet = await this.db.tweet.findUnique({ where: { id } });

    if (!tweet) {
      throw new NotFoundException();
    }

    if (tweet.id !== id) {
      throw new ForbiddenException();
    }

    await this.db.tweet.delete({ where: { id } });

  
  }
}