/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Filme, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FilmesService {
  filme: any;

  constructor(private prisma: PrismaService) { }

  async getAll(): Promise<Filme[]> {
    return this.prisma.filme.findMany();
  }

  async getById(id: number) {
    return this.filme.getById(id).exec();
  }

  async createFilme(data: Prisma.FilmeCreateInput): Promise<Filme> {
    return this.prisma.filme.create({ data });
  }

  async delete(id: number) {
    return this.filme.deleteOne(id);
  }
}