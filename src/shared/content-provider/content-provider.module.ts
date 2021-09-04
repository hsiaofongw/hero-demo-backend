import { Module } from '@nestjs/common';
import { LocalArticlesProviderService } from './services/local-articles-provider/local-articles-provider.service';
import { LocalPdfContentProviderService } from './services/local-pdf-content-provider/local-pdf-content-provider.service';

@Module({
  providers: [LocalArticlesProviderService, LocalPdfContentProviderService],
  exports: [LocalArticlesProviderService, LocalPdfContentProviderService],
})
export class ContentProviderModule {}
