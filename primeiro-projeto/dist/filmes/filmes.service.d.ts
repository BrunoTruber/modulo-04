import { Filme, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class FilmesService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<Filme[]>;
    getById(id: number): Promise<any>;
    createFilme(data: Prisma.FilmeCreateInput): Promise<Filme>;
    delete(id: number): Promise<any>;
}
