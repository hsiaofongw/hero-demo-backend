import { Module } from '@nestjs/common';
import { LocalArticlesProviderService } from './services/local-articles-provider/local-articles-provider.service';
import { LocalCardsProviderService } from './services/local-cards-provider/local-cards-provider.service';
import { LocalMetadataProviderService } from './services/local-metadata-provider/local-metadata-provider.service';
import { LocalPdfContentProviderService } from './services/local-pdf-content-provider/local-pdf-content-provider.service';

@Module({
  providers: [
    LocalArticlesProviderService,
    LocalPdfContentProviderService,
    LocalCardsProviderService,
    LocalMetadataProviderService,
  ],
  exports: [
    LocalArticlesProviderService,
    LocalPdfContentProviderService,
    LocalCardsProviderService,
    LocalMetadataProviderService,
  ],
})
export class ContentProviderModule {}
