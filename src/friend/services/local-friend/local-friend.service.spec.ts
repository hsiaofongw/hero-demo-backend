import { Test, TestingModule } from '@nestjs/testing';
import { LocalFriendService } from './local-friend.service';

describe('LocalFriendService', () => {
  let service: LocalFriendService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocalFriendService],
    }).compile();

    service = module.get<LocalFriendService>(LocalFriendService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
