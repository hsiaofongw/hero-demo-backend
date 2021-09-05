import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { IArticleQueryParam, IArticleQueryResult } from 'src/article/interface';
import { LocalArticlesProviderService } from 'src/shared/content-provider/services/local-articles-provider/local-articles-provider.service';
import { ArticleService } from '../article/article.service';

@Injectable()
export class LocalArticleService implements ArticleService {
  constructor(private articlesProvider: LocalArticlesProviderService) {}
  getArticles(param: IArticleQueryParam): Observable<IArticleQueryResult> {
    return this.articlesProvider.getArticles(param);
  }
}
