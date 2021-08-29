import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { IArticleQueryResult } from 'src/article/interface';
import { ArticleService } from '../article/article.service';
import { articles } from '../../data';

@Injectable()
export class LocalArticleService implements ArticleService {
  getAllArticles(): Observable<IArticleQueryResult> {
    return of({ totalCounts: articles.length, offset: 0, result: articles });
  }
}
