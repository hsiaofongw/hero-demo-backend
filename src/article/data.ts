import { articles as _articles } from '../data/articles';
import { IArticle } from './interface';

export const articles: IArticle[] = _articles.map((item) => ({
  title: item.name,
  created: 0,
  modified: 0,
  description: item.description,
  url: item.file,
  date: item.date,
}));
