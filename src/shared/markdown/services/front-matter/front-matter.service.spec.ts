import { Test, TestingModule } from '@nestjs/testing';
import { FrontMatterService } from './front-matter.service';

describe('FrontMatterService', () => {
  let service: FrontMatterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FrontMatterService],
    }).compile();

    service = module.get<FrontMatterService>(FrontMatterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
