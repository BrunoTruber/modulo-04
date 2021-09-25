/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
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

  @Post()
  async create(@Body() createFilme: CreateFilmeDto): Promise<Filme> {
    return this.filmesService.createFilme(createFilme);
  }
}