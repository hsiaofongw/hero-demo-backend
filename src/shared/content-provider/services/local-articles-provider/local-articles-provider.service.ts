import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { ArticleQueryResult } from 'src/article/interface';
import { CacheStaleWhileRevalidateObservable } from '../../decoractors/cache';
import { articles as _articles } from '../../external/blog-content-center/data/articles';
import { IArticle } from '../../interfaces';
import { ArticleQueryParam } from '../../interfaces';

@Injectable()
export class LocalArticlesProviderService {
  public articles(option: ArticleQueryParam): IArticle[] {
    return _articles
      .filter(option.predicate)
      .slice(option.paging.offset, option.paging.offset + option.paging.limit);
  }

  public getArticlesSync(param: ArticleQueryParam): ArticleQueryResult {
    const offset = param.paging.offset;
    const endIdx = offset + param.paging.limit;
    const data = _articles.filter(param.predicate).slice(offset, endIdx);
    const total = _articles.length;

    return { offset, total, data };
  }

  @CacheStaleWhileRevalidateObservable({ namespace: 'content::articles' })
  public getArticles(param: ArticleQueryParam): Observable<ArticleQueryResult> {
    return of(this.getArticlesSync(param));
  }
}
