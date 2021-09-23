/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateFilmeDto } from './dto/create-filme.dto';

export type Filme = {
  nome: string;
  imagem?: string;
};

const filmes: Filme[] = [
  {
    nome: 'Deadpool',
    imagem:
      'https://ogimg.infoglobo.com.br/rioshow/24884446-8f3-e73/FT1086A/deadpool-primeiro-filme.jpeg.jpg',
  },
  {
    nome: 'Minha Mãe é uma Peça',
    imagem:
      'https://www.atrevida.com.br/wp-content/uploads/2021/05/netflix-anuncia-minha-mae-e-uma-epeca-no-catalago.jpg',
  },
];

@Injectable()
export class FilmesService {
  getAll() {
    return filmes;
  }

  createFilme(filme: CreateFilmeDto) {
    return filmes.push(filme);
  }
}