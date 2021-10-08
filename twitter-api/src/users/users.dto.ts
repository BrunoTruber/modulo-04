/* eslint-disable prettier/prettier */
import { IsString, Length } from 'class-validator';
export class CreateUsersDto {
  @IsString()
  @Length(3, 30)
  username: string;

  @IsString()
  @Length(8, 30)
  password: string;

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
  criado_em: string;

  @IsString()
  modificado_em: string;

  // @IsNumber()
  // seguidores: [];

  // @IsNumber()
  // seguindo: number[];

  // @IsNumber()
  // tweet: number[];
}
