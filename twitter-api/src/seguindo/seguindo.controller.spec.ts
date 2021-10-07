import { Test, TestingModule } from '@nestjs/testing';
import { SeguindoController } from './seguindo.controller';

describe('SeguindoController', () => {
  let controller: SeguindoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeguindoController],
    }).compile();

    controller = module.get<SeguindoController>(SeguindoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
