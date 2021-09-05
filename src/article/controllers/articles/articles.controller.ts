import { Controller, Get, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ArticleQueryDto } from 'src/article/dtos/get-articles.dto';
import { IArticleQueryResult } from 'src/article/interface';
import { ArticleService } from 'src/article/services/article/article.service';

@Controller('articles')
export class ArticlesController {
  constructor(private articleService: ArticleService) {}

  @Get()
  getArticles(
    @Query() param: ArticleQueryDto,
  ): Observable<IArticleQueryResult> {
    const limit = parseInt(param.limit);
    const offset = parseInt(param.offset);
    return this.articleService.getArticles({
      paging: { limit, offset },
      predicate: () => true,
    });
  }
}
