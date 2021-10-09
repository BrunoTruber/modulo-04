import { User, Prisma } from '.prisma/client';
import { UsersService } from './users.service';
export declare class UsersController {
    private service;
    constructor(service: UsersService);
    create(data: Prisma.UserCreateInput): Promise<User>;
    findMany(): Promise<User[]>;
    findUnique(id: number): Promise<User>;
    delete(id: number): Promise<User>;
}
