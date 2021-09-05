import { Module } from '@nestjs/common';
import { ContentProviderModule } from 'src/shared/content-provider/content-provider.module';
import { RssController } from './controllers/rss/rss.controller';
import { ArticleRssService } from './services/article-rss/article-rss.service';

@Module({
  providers: [ArticleRssService],
  imports: [ContentProviderModule],
  controllers: [RssController],
})
export class RssModule {}
