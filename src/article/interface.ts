import { IArticle } from 'src/shared/content-provider/interfaces';

export interface IArticleQueryResult {
  totalCounts: number;
  offset: number;
  result: IArticle[];
}
