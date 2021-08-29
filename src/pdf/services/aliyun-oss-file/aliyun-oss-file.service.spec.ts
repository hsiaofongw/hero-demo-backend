import { Test, TestingModule } from '@nestjs/testing';
import { AliyunOssFileService } from './aliyun-oss-file.service';

describe('AliyunOssFileService', () => {
  let service: AliyunOssFileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AliyunOssFileService],
    }).compile();

    service = module.get<AliyunOssFileService>(AliyunOssFileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
