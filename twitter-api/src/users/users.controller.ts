/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { user } from '.prisma/client';
import { CreateUsersDto } from './users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Get(':username')
  findUnique(@Param('username') username: string): Promise<user> {
    return this.service.findUnique(username);
  }

  @Post()
  create(@Body() data: CreateUsersDto): Promise<user> {
    return this.service.create(data);
  }
}
