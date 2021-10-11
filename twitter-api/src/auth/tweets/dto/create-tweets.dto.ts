/* eslint-disable prettier/prettier */
import { IsString, Length, IsNotEmpty } from 'class-validator';

export class CreateTweetDto {
  @IsString()
  @Length(1, 140)
  text: string;

  @IsNotEmpty()
  createdAt: string;

  @IsNotEmpty()
  updatedAt: string;
}