import { Controller, Get, Header } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { ArticleRssService } from 'src/rss/services/article-rss/article-rss.service';

@Controller('rss')
export class RssController {
  constructor(private rssService: ArticleRssService) {}

  @Get('atom')
  @Header('Content-Type', 'application/atom+xml; charset=utf-8')
  getRss() {
    const rss$ = this.rssService.getArticlesRss();
    return rss$.pipe(map((rssObj) => rssObj.atom));
  }
}
