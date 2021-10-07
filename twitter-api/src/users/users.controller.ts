/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, Param, UseGuards} from '@nestjs/common';
import { User } from '.prisma/client';
import { CreateUsersDto } from './users.dto';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Get(':username')
  findUnique(@Param('username') username: string): Promise<User> {
    return this.service.findUnique(username);
  }

  @Post()
  create(@Body() data: CreateUsersDto): Promise<User> {
    return this.service.create(data);
  }
}
