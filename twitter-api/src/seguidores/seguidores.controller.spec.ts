import { Test, TestingModule } from '@nestjs/testing';
import { SeguidoresController } from './seguidores.controller';

describe('SeguidoresController', () => {
  let controller: SeguidoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeguidoresController],
    }).compile();

    controller = module.get<SeguidoresController>(SeguidoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
