import { IArticle } from './external/blog-content-center/data/articles';
import { ICard } from './external/blog-content-center/data/cards';
import { IMetaData } from './external/blog-content-center/data/metadata';

export { IArticle, ICard, IMetaData };

export type IPagingParam = { offset: number; limit: number };

export type IQueryParam<T> = {
  predicate: (value: Partial<T>, inex: number, array: T[]) => boolean;
  paging: IPagingParam;
};

export type IQueryResult<T> = {
  data: T[];
  total: number;
  offset: number;
};

export type IArticleQueryParam = IQueryParam<IArticle>;

export type IArticleQueryResult = IQueryResult<IArticle>;

export type ICardQueryParam = IQueryParam<ICard>;

export type ICardQueryResult = IQueryResult<ICard>;
