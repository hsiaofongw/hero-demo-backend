import { Test, TestingModule } from '@nestjs/testing';
import { LocalPdfContentProviderService } from './local-pdf-content-provider.service';

describe('LocalPdfContentProviderService', () => {
  let service: LocalPdfContentProviderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocalPdfContentProviderService],
    }).compile();

    service = module.get<LocalPdfContentProviderService>(LocalPdfContentProviderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
