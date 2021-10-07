/* eslint-disable prettier/prettier */

import {IsNotEmpty } from 'class-validator';

export class PostSeguidoresDto {
    @IsNotEmpty()
    idSeguidor: number;

    @IsNotEmpty()
    user: string[];
}