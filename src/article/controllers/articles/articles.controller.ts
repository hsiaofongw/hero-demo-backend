import { Controller, Get, Param, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArticleQueryDto } from 'src/article/dtos/get-articles.dto';
import { IArticleQueryResult, IArticle } from 'src/article/interface';
import { ArticleService } from 'src/article/services/article/article.service';

@Controller('articles')
export class ArticlesController {
  constructor(private articleService: ArticleService) {}

  /** 获取文章信息 */
  @Get(':file')
  getArticleInfo(@Param('file') file: string): Observable<IArticleQueryResult> {
    // 调用 service 查询是否存在这篇文章
    const articleInfo$ = this.articleService.getArticleInfo(file);

    const queryResult$ = articleInfo$.pipe(
      map((article?: IArticle) => {
        // 构造默认请求结果
        const queryResult: IArticleQueryResult = {
          data: [],
          total: 0,
          offset: 0,
        };

        // 如果确有此篇文章，则添加到请求结果中
        if (article !== undefined) {
          queryResult.data.push(article);
          queryResult.total = 1;
        }

        return queryResult;
      }),
    );
    return queryResult$;
  }

  /** 获取文章列表 */
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
