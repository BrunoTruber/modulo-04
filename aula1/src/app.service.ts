import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Bruno Truber';
  }
  getName(): string {
    return 'Truber';
  }
}
