import { Module } from '@nestjs/common';
import { SeguidoresController } from './seguidores.controller';
import { SeguidoresService } from './seguidores.service';

@Module({
  controllers: [SeguidoresController],
  providers: [SeguidoresService]
})
export class SeguidoresModule {}
