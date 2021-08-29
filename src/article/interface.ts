export interface IArticle {
  title: string;
  created: number;
  modified?: number;
  author?: string;
  description?: string;
  url: string;
  date?: string;
}

export interface IArticleQueryResult {
  totalCounts: number;
  offset: number;
  result: IArticle[];
}
