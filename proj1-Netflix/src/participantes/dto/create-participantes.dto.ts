/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateParticipanteDto {
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  imagem: string;

  @IsNotEmpty()
  data_nascimento: number;

  @IsNotEmpty()
  staff: string;

  filmes: number[]
}
