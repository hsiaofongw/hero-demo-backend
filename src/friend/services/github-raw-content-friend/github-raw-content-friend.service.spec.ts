import { Test, TestingModule } from '@nestjs/testing';
import { GithubRawContentFriendService } from './github-raw-content-friend.service';

describe('GithubRawContentFriendService', () => {
  let service: GithubRawContentFriendService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GithubRawContentFriendService],
    }).compile();

    service = module.get<GithubRawContentFriendService>(
      GithubRawContentFriendService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
