/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator'

export class CreateParticipanteDto {
  @IsNotEmpty()
  nome: string;

 // @IsOptional()
  //filmeId: number;  

  @IsNotEmpty()
  imagem: string;

  @IsNotEmpty()
  data_nascimento: number;

  @IsNotEmpty()
  staff: string;
}