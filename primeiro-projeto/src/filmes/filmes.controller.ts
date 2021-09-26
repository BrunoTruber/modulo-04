/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, Delete, Param } from '@nestjs/common';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { FilmesService } from './filmes.service';
import { Filme } from '.prisma/client'

@Controller('filmes')
export class FilmesController {// filmesService virou FilmesService?
  constructor(private filmesService: FilmesService) {}

  @Get() //o que o método index esta fazendo? oque a promise esta fazendo?
  async index():Promise<Filme[]> {// esse ':' faz o que?
    return this.filmesService.getAll();
  }

  @Get(':id') //(@Param('id') id: number) busca e referencia o id que esta neste getById(id)?
  async  getById(@Param('id') id: number) : Promise<Filme> {
    return this.filmesService.getById(id);
  }

  @Post()// createFilme virou CreateFilmeDto? oque é esse @Body()?
  async create(@Body() createFilme: CreateFilmeDto): Promise<Filme> {//oque essa promise esta fazendo? 
    return this.filmesService.createFilme(createFilme);
  }

  @Delete(':id')
  async Delete(@Param('id') id: number) {
    return this.filmesService.delete(id)`;
  }
}