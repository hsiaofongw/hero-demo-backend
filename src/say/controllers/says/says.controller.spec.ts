import { Test, TestingModule } from '@nestjs/testing';
import { SaysController } from './says.controller';

describe('SaysController', () => {
  let controller: SaysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SaysController],
    }).compile();

    controller = module.get<SaysController>(SaysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
