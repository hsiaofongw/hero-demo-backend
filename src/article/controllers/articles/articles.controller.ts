import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ArticleQueryParam, ArticleQueryResult } from 'src/article/interface';
import { ArticleService } from 'src/article/services/article/article.service';

@Controller('articles')
export class ArticlesController {
  constructor(private articleService: ArticleService) {}

  @Get()
  getAllArticles(param: ArticleQueryParam): Observable<ArticleQueryResult> {
    return this.articleService.getArticles(param);
  }
}
