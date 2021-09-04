import { Injectable } from '@nestjs/common';
import { CacheStaleWhileRevalidatePromise } from '../../decoractors/cache';
import { readFile } from 'fs/promises';
import path from 'path';

@Injectable()
export class LocalPdfContentProviderService {
  @CacheStaleWhileRevalidatePromise({ namespace: 'content::pdf' })
  public async pdf(fileName: string): Promise<Buffer> {
    const fullPDFFileName = path.resolve(
      __dirname,
      'src/shared/content-provider/external/blog-content-center/pdfs',
      fileName,
    );

    const content = await readFile(fullPDFFileName);
    return content;
  }
}
