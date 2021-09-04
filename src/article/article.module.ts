import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ContentProviderModule } from 'src/shared/content-provider/content-provider.module';
import { DateTimeHelperModule } from 'src/shared/date-time-helper/date-time-helper.module';
import { ArticlesController } from './controllers/articles/articles.controller';
import { ArticleService } from './services/article/article.service';
import { LocalArticleService } from './services/local-article/local-article.service';

/** 对外提供文章列表查询服务 */
@Module({
  providers: [
    { provide: ArticleService, useClass: LocalArticleService },
    LocalArticleService,
  ],
  controllers: [ArticlesController],
  imports: [HttpModule, DateTimeHelperModule, ContentProviderModule],
})
export class ArticleModule {}
