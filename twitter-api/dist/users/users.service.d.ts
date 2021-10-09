import { User, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
export declare class UsersService {
    private db;
    constructor(db: PrismaService);
    findMany(): Promise<User[]>;
    findUnique(id: number): Promise<User>;
    create(data: Prisma.UserCreateInput): Promise<User>;
    deleteOneUser(where: Prisma.UserWhereUniqueInput): Promise<User>;
}
