import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  IArticleQueryParam,
  IArticleQueryResult,
  IArticle,
} from 'src/article/interface';
import { LocalArticlesProviderService } from 'src/shared/content-provider/services/local-articles-provider/local-articles-provider.service';
import { ArticleService } from '../article/article.service';

/** 此 Service 利用本地资源实现 ArticleService */
@Injectable()
export class LocalArticleService implements ArticleService {
  constructor(private articlesProvider: LocalArticlesProviderService) {}
  /**
   * 获取文章信息
   * @param {string} file - 文件id, 能唯一确定一篇文章
   */
  getArticleInfo(file: string): Observable<IArticle | undefined> {
    const queryResult$ = this.articlesProvider.getArticles({
      predicate: (x) => x.file === file,
      paging: { limit: 1, offset: 0 },
    });

    return queryResult$.pipe(
      map((result) => {
        if (result.data.length) {
          return result.data[0];
        }
      }),
    );
  }

  /** 获取文章列表 */
  getArticles(param: IArticleQueryParam): Observable<IArticleQueryResult> {
    return this.articlesProvider.getArticles(param);
  }
}
