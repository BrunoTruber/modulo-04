import { User, Prisma } from '.prisma/client';
import { CreateUsersDto } from './users.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private service;
    constructor(service: UsersService);
    create(data: Prisma.UserCreateInput): Promise<User>;
    findMany(): Promise<User[]>;
    findUnique(id: number): Promise<User>;
    delete(id: number): Promise<User>;
    update(updateUser: CreateUsersDto, id: number): Promise<User>;
}
