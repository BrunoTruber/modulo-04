import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SeguindoModule } from './seguindo/seguindo.module';
import { SeguidoresModule } from './seguidores/seguidores.module';

@Module({
  imports: [UsersModule, AuthModule, SeguindoModule, SeguidoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
