/* eslint-disable prettier/prettier */
import { IsString, Length } from 'class-validator';
import { user } from '.prisma/client';

export class LoginDto {
  @IsString()
  @Length(3, 30)
  username: string;

  @IsString()
  @Length(8, 30)
  password: string;
}

export class AuthResponse {
  token: string;
  user: user;
}