/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUsersDto} from './dto/create-users.dto';
import { User, UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    index(): User[] {
        return this.usersService.getAll()
    }

    @Post()
    create(@Body() createUser: CreateUsersDto) {
        this.usersService.createUser(createUser);  
    }
}