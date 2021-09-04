import { Injectable } from '@nestjs/common';
import { articles as _articles } from '../../external/blog-content-center/data/articles';
import { IArticle } from '../../interfaces';
import { ArticleQueryParam } from '../../interfaces';

@Injectable()
export class LocalArticlesProviderService {
  public articles(option: ArticleQueryParam): IArticle[] {
    return _articles
      .filter(option.predicate)
      .slice(option.paging.offset, option.paging.offset + option.paging.limit);
  }
}
