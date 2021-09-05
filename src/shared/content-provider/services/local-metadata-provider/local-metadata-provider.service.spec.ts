import { Test, TestingModule } from '@nestjs/testing';
import { LocalMetadataProviderService } from './local-metadata-provider.service';

describe('LocalMetadataProviderService', () => {
  let service: LocalMetadataProviderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocalMetadataProviderService],
    }).compile();

    service = module.get<LocalMetadataProviderService>(LocalMetadataProviderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
