import { User } from '.prisma/client';
import { CreateUsersDto } from './users.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private service;
    constructor(service: UsersService);
    findMany(): Promise<User[]>;
    findUnique(username: string): Promise<User>;
    create(data: CreateUsersDto): Promise<User>;
    delete(username: string): Promise<User>;
}
