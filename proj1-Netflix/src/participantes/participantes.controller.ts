/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateParticipanteDto } from './dto/create-participantes.dto';
import { ParticipantesService } from './participantes.service';
import { Participante } from '@prisma/client';
  
  @Controller('participantes')
  export class ParticipantesController {
    constructor(private participantesService: ParticipantesService) {}
  
    @Post('/create')
    @UsePipes(ValidationPipe)
    async create(
      @Body() createParticipante: CreateParticipanteDto,
    ): Promise<Participante> {
      return this.participantesService.createParticipante(createParticipante);
    }
  
    @Get('/listar')
    @UsePipes(ValidationPipe)
    async findMany(): Promise<Participante[]> {
      return this.participantesService.getAll();
    }
  }