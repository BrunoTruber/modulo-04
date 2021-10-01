/* eslint-disable prettier/prettier */
import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable() //oque esse Injectable esta fazendo?
export class PrismaService extends PrismaClient implements OnModuleInit {
  private _participante: any;
  public get participante(): any {
    return this._participante;
  }
  public set participante(value: any) {
    this._participante = value;
  }
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}