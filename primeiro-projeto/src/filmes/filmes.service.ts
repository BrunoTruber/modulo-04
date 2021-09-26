/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Filme, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()//oque esse Injectable esta fazendo?
export class FilmesService {
  filme: any; // de onde veio esse filme e porque?
         // prisma virou PrismaService?
  constructor(private prisma: PrismaService) { }

  async getAll(): Promise<Filme[]> { // o que essa promise esta fazendo?
    return this.prisma.filme.findMany();
  }

  async getById(id: number) {
    return this.filme.getById(id).exec();
  }
   // data virou Prisma.FilmeCreateInput? de onde veio FilmeCreateInput?
  async createFilme(data: Prisma.FilmeCreateInput): Promise<Filme> {
    return this.prisma.filme.create({ data });
  }

  async delete(id: number) {
    return this.filme.deleteOne(id);
  }
}