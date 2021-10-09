/* eslint-disable prettier/prettier */
import { IsString, Length } from 'class-validator';
export class CreateUsersDto {
  @IsString()
  @Length(3, 30)
  username: string;

  @IsString()
  @Length(8, 30)
  senha: string;

  @IsString()
  @Length(2, 50)
  displayName: string;

  @IsString()
  imagem: string;

  @IsString()
  bio: string;

  @IsString()
  nascimento: string;

  @IsString()
  createdAt: Date;

  @IsString()
  updatedAt: Date;

  @IsString()
  tweets: string[];

  @IsString()
  follows: string[];

  @IsString()
  likes: string[]; 

}
