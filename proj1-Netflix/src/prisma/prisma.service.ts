/* eslint-disable prettier/prettier */
import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable() //oque esse Injectable esta fazendo?
export class PrismaService extends PrismaClient implements OnModuleInit {
  participante: any;
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}