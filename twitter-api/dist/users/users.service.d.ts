import { user, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
export declare class UsersService {
    private db;
    constructor(db: PrismaService);
    findUnique(username: string): Promise<user>;
    create(data: Prisma.userCreateInput): Promise<user>;
}
