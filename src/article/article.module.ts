import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { DateTimeHelperModule } from 'src/shared/date-time-helper/date-time-helper.module';
import { ArticlesController } from './controllers/articles/articles.controller';
import { ArticleService } from './services/article/article.service';
import { LocalArticleService } from './services/local-article/local-article.service';

@Module({
  providers: [
    { provide: ArticleService, useClass: LocalArticleService },
    LocalArticleService,
  ],
  controllers: [ArticlesController],
  imports: [HttpModule, DateTimeHelperModule],
})
export class ArticleModule {}
