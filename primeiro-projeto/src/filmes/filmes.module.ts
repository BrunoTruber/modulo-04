import { Module } from '@nestjs/common';
import { FilmesController } from './filmes.controller';
import { FilmesService } from './filmes.service';

@Module({
  controllers: [FilmesController],
  providers: [FilmesService],
})
export class FilmesModule {}
