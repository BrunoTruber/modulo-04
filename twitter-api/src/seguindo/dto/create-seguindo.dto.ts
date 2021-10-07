/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

export class PostSeguindoDto {
    @IsNotEmpty()
    idSeguindo: number;

    @IsNotEmpty()
    user: number[];
}