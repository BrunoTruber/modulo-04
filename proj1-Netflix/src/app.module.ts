/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmesModule } from './filmes/filmes.module';
import { PrismaModule } from './prisma/prisma.module';
import { ParticipanteModule } from './participantes/participantes.module';


@Module({
  imports: [FilmesModule, PrismaModule, ParticipanteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
