import { Test, TestingModule } from '@nestjs/testing';
import { GithubRawContentArticleService } from './github-raw-content-article.service';

describe('GithubRawContentArticleService', () => {
  let service: GithubRawContentArticleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GithubRawContentArticleService],
    }).compile();

    service = module.get<GithubRawContentArticleService>(GithubRawContentArticleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
