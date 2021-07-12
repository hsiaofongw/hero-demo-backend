import { Test, TestingModule } from '@nestjs/testing';
import { DateTimeHelperService } from './date-time-helper.service';

describe('DateTimeHelperService', () => {
  let service: DateTimeHelperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DateTimeHelperService],
    }).compile();

    service = module.get<DateTimeHelperService>(DateTimeHelperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
