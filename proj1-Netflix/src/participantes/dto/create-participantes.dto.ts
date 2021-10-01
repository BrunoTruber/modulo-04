/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsOptional } from 'class-validator'

export class CreateParticipanteDto {
  @IsNotEmpty()
  nome: string;

  @IsOptional()
  filmeId: number;  

  @IsNotEmpty()
  imagem: string;

  @IsNotEmpty()
  data_nascimento: number;

  @IsNotEmpty()
  staff: string;
}