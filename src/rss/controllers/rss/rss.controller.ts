import { Controller, Get, Header } from '@nestjs/common';
import { ArticleRssService } from 'src/rss/services/article-rss/article-rss.service';

@Controller('rss')
export class RssController {
  constructor(private rssService: ArticleRssService) {}

  @Get('atom')
  @Header('Content-Type', 'application/atom+xml; charset=utf-8')
  async getRss() {
    const rss = await this.rssService.getArticlesRss();
    return rss.atom;
  }
}
