/* eslint-disable prettier/prettier */
import { IsString, Length, IsDate, IsNotEmpty } from 'class-validator';

export class PostTweetDto {
  @IsString()
  @Length(1, 140)
  content: string;

  @IsString()
  @Length(1)
  emoji: string;

  @IsDate()
  createdAt: string;

  @IsNotEmpty()
  curtidas: number;

  @IsNotEmpty()
  user: string[];
}