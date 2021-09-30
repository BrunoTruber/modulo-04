/* eslint-disable prettier/prettier */

import { IsNotEmpty } from 'class-validator';


export class CreateUsersDto {
    @IsNotEmpty()
    nome: string;

    @IsNotEmpty()
    cpf: number;
}