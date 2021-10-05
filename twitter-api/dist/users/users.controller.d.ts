import { User } from '.prisma/client';
import { CreateUsersDto } from './users.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private service;
    constructor(service: UsersService);
    findUnique(username: string): Promise<User>;
    create(data: CreateUsersDto): Promise<User>;
}