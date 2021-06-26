import { Test, TestingModule } from '@nestjs/testing';
import { MockHeroService } from './mock-hero.service';

describe('MockHeroService', () => {
  let service: MockHeroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MockHeroService],
    }).compile();

    service = module.get<MockHeroService>(MockHeroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
