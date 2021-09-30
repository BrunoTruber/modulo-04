/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-users.dto';

export type User = {
    nome: string;
    cpf: number;
};

 const users : User[] = [
    {
         nome: 'John',
         cpf: 123456789009
    }
];

@Injectable()
export class UsersService {
    getAll() {
        return users;
    }

    createUser(user: CreateUsersDto) {
        return users.push(user);
    }
}