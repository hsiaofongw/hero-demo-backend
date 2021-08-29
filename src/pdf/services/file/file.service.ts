import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class FileService {
  abstract getFile(fileName: string): Promise<Buffer>;
}
