import { Test, TestingModule } from '@nestjs/testing';
import { LocalArticlesProviderService } from './local-articles-provider.service';

describe('LocalArticlesProviderService', () => {
  let service: LocalArticlesProviderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocalArticlesProviderService],
    }).compile();

    service = module.get<LocalArticlesProviderService>(LocalArticlesProviderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
