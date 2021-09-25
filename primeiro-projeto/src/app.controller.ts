import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/filmes')
  getAll(): string {
    return this.appService.getAll();
  }

  @Get('/name')
  getName(): string {
    return this.appService.getName();
  }
}
