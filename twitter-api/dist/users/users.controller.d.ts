import { user } from '.prisma/client';
import { CreateUsersDto } from './users.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private service;
    constructor(service: UsersService);
    findUnique(username: string): Promise<user>;
    create(data: CreateUsersDto): Promise<user>;
}
