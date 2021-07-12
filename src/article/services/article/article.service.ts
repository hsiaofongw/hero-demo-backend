import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { IArticleQueryResult } from 'src/article/interface';

@Injectable()
export abstract class ArticleService {
  abstract getAllArticles(): Observable<IArticleQueryResult>;
}
