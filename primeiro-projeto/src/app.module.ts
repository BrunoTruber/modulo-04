import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmesModule } from './filmes/filmes.module';

@Module({
  imports: [FilmesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
