import { Test, TestingModule } from '@nestjs/testing';
import { LocalArticleService } from './local-article.service';

describe('LocalArticleService', () => {
  let service: LocalArticleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocalArticleService],
    }).compile();

    service = module.get<LocalArticleService>(LocalArticleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
