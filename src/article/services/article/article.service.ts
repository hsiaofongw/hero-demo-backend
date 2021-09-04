import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ArticleQueryParam } from 'src/shared/content-provider/interfaces';
import { ArticleQueryResult } from '../../interface';

@Injectable()
export abstract class ArticleService {
  abstract getArticles(
    param: ArticleQueryParam,
  ): Observable<ArticleQueryResult>;
}
