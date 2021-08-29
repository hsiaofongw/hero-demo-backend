import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PdfController } from './controllers/pdf/pdf.controller';
import { AliyunOssFileService } from './services/aliyun-oss-file/aliyun-oss-file.service';
import { FileService } from './services/file/file.service';

@Module({
  imports: [ConfigModule],
  providers: [
    AliyunOssFileService,
    { provide: FileService, useClass: AliyunOssFileService },
  ],
  controllers: [PdfController],
})
export class PdfModule {}
