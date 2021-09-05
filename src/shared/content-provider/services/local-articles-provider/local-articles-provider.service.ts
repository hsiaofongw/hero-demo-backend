import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { IArticleQueryResult } from 'src/article/interface';
import { articles as _articles } from '../../external/blog-content-center/data/articles';
import { IArticle } from '../../interfaces';
import { IArticleQueryParam } from '../../interfaces';

@Injectable()
export class LocalArticlesProviderService {
  public articles(option: IArticleQueryParam): IArticle[] {
    return _articles
      .filter(option.predicate)
      .slice(option.paging.offset, option.paging.offset + option.paging.limit);
  }

  public getArticlesSync(param: IArticleQueryParam): IArticleQueryResult {
    const offset = param.paging.offset;
    const endIdx = offset + param.paging.limit;
    const data = _articles.filter(param.predicate).slice(offset, endIdx);
    const total = _articles.length;

    return { offset, total, data };
  }

  public getArticles(
    param: IArticleQueryParam,
  ): Observable<IArticleQueryResult> {
    return of(this.getArticlesSync(param));
  }

  public getAllArticles(): Observable<IArticleQueryResult> {
    return of({ offset: 0, total: _articles.length, data: _articles });
  }
}
