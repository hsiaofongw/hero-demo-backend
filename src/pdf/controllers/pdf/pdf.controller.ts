import { Controller, Get, Param } from '@nestjs/common';
import { FileService } from 'src/pdf/services/file/file.service';

@Controller('pdf')
export class PdfController {
  constructor(private fileService: FileService) {}

  @Get(':fileName')
  getPdfFile(@Param('fileName') fileName: string) {
    return this.fileService.getFile(fileName);
  }
}
