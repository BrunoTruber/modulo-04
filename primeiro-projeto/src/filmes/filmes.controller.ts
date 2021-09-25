/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, Delete, Param } from '@nestjs/common';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { FilmesService } from './filmes.service';
import { Filme } from '.prisma/client'

@Controller('filmes')
export class FilmesController {
  constructor(private filmesService: FilmesService) {}

  @Get()
  async index():Promise<Filme[]> {
    return this.filmesService.getAll();
  }

  @Get(':id')
  async  getById(@Param('id') id: number) : Promise<Filme> {
    return this.filmesService.getById(id);
  }

  @Post()
  async create(@Body() createFilme: CreateFilmeDto): Promise<Filme> {
    return this.filmesService.createFilme(createFilme);
  }

  @Delete(':id')
  async Delete(@Param('id') id: number) {
    return this.filmesService.delete(id)`;
  }
}