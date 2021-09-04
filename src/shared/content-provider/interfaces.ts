import { IArticle } from './external/blog-content-center/data/articles';
import { ICard } from './external/blog-content-center/data/cards';

export { IArticle };
export { ICard };

export type PagingParam = { offset: number; limit: number };

export type QueryParam<T> = {
  predicate: (value: Partial<T>, inex: number, array: T[]) => boolean;
  paging: PagingParam;
};

export type ArticleQueryParam = QueryParam<IArticle>;
