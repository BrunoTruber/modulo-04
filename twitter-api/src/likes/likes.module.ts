import { Module } from '@nestjs/common';
import { ControllerModule } from './controller/controller.module';
import { LikesController } from './likes.controller';
import { LikesService } from './likes.service';

@Module({
  imports: [ControllerModule],
  controllers: [LikesController],
  providers: [LikesService]
})
export class LikesModule {}
