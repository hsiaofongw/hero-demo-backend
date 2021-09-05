import { Test, TestingModule } from '@nestjs/testing';
import { LocalCardsProviderService } from './local-cards-provider.service';

describe('LocalCardsProviderService', () => {
  let service: LocalCardsProviderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocalCardsProviderService],
    }).compile();

    service = module.get<LocalCardsProviderService>(LocalCardsProviderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
