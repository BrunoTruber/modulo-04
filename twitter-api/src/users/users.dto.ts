/* eslint-disable prettier/prettier */
import { IsDate, IsNumber, IsOptional, IsString, Length } from 'class-validator';
export class CreateUsersDto {
  @IsNumber()
  id: number;
  
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

  @IsDate()
  nascimento: Date;

  @IsString()
  createdAt: Date;

  @IsString()
  updatedAt: Date;

  @IsOptional()
  tweets:number[];

  @IsOptional()
  follows: number[];

  @IsOptional()
  likes: number[]; 

}
