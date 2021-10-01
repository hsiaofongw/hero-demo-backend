import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { IArticleQueryParam } from 'src/shared/content-provider/interfaces';
import { IArticleQueryResult, IArticle } from '../../interface';

@Injectable()
export abstract class ArticleService {
  /**
   * 获取文章信息
   * @param {string} file - 文件id, 能唯一确定一篇文章
   */
  abstract getArticleInfo(file: string): Observable<IArticle | undefined>;

  /** 获取文章列表 */
  abstract getArticles(
    param: IArticleQueryParam,
  ): Observable<IArticleQueryResult>;
}
