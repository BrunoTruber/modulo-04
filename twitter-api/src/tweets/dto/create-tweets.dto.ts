/* eslint-disable prettier/prettier */
import { IsString, Length, IsDate, IsOptional } from 'class-validator';

export class PostTweetDto {
  @IsString()
  @Length(1, 140)
  text: string;

  @IsDate()
  createdAt: string;

  @IsDate()
  updatedAt: string;

  @IsOptional()
  likes: number[];

  @IsOptional()
  User: number;

  @IsOptional()
  userId: number;

}