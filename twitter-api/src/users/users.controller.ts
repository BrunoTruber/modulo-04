/* eslint-disable prettier/prettier */
import { Controller, Body, Get, Post, Param } from '@nestjs/common';
import { User } from '..prisma/client';
import { CreateUsersDto} from './users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private service: UsersService) {}

    @Get(':username')
    findUnique(@Param('username') username: string): Promise<User> {
        return this.service.findUnique(username)
    }

    @Post()
    create(@Body() data: CreateUsersDto): Promise<User> {
        return this.service.create(data);
    }
}
