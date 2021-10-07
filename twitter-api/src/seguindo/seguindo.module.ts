import { Module } from '@nestjs/common';
import { SeguindoController } from './seguindo.controller';
import { SeguindoService } from './seguindo.service';

@Module({
  controllers: [SeguindoController],
  providers: [SeguindoService]
})
export class SeguindoModule {}
