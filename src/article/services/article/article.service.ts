import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { IArticleQueryParam } from 'src/shared/content-provider/interfaces';
import { IArticleQueryResult } from '../../interface';

@Injectable()
export abstract class ArticleService {
  abstract getArticles(
    param: IArticleQueryParam,
  ): Observable<IArticleQueryResult>;
}
