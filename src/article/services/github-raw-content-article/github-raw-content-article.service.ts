import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IArticle, IArticleQueryResult } from 'src/article/interface';
import { ArticleService } from '../article/article.service';
import { AxiosResponse } from 'axios';
import { DateTimeHelperService } from 'src/shared/date-time-helper/services/date-time-helper/date-time-helper.service';

type ServerReturn = {
  name: string;
  file: string;
  date: string;
  description: string;
}[];

@Injectable()
export class GithubRawContentArticleService implements ArticleService {
  constructor(
    private httpClient: HttpService,
    private dateTimeHelper: DateTimeHelperService,
  ) {}

  getAllArticles(): Observable<IArticleQueryResult> {
    const apiPath =
      'https://raw.githubusercontent.com/hsiaofongw/blog-data-nextjs/main/data/articles.json';

    return this.httpClient.get<ServerReturn>(apiPath).pipe(
      map((serverReturn: AxiosResponse<ServerReturn>) => {
        const totalCounts = serverReturn.data.length;
        const offset = 0;
        const articles = serverReturn.data.map(
          (item) =>
            ({
              title: item.name,
              created: this.dateTimeHelper
                .tranformLocaleDateStringToDateObject(item.date)
                .valueOf(),
              description: item.description,
              url: item.file,
            } as IArticle),
        );

        return {
          totalCounts,
          offset,
          result: articles,
        } as IArticleQueryResult;
      }),
    );
  }
}
