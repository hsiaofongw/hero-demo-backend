import { Test, TestingModule } from '@nestjs/testing';
import { ArticleRssService } from './article-rss.service';

describe('ArticleRssService', () => {
  let service: ArticleRssService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticleRssService],
    }).compile();

    service = module.get<ArticleRssService>(ArticleRssService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
