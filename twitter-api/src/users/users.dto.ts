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

  imagem: string;

  bio: string;

  nascimento: number;

  criado_em: number;

  modificado_em: number;

  seguidores: number[];

  seguindo: number[];
  tweet: number[];
}
