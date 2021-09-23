/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { FilmesService, Filme } from './filmes.service';

@Controller('filmes')
export class FilmesController {
  constructor(private filmesService: FilmesService) {}

  @Get()
  index(): Filme[] {
    return this.filmesService.getAll();
  }

  @Post()
  create(@Body() createFilme: CreateFilmeDto) {
    this.filmesService.createFilme(createFilme);
  }
}