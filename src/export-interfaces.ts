/** 当此仓库作为一个 submodule 立足于前端仓库时，前端代码会引用此文件导出的 interfaces */

import {
  IArticle,
  IArticleQueryParam,
  IArticleQueryResult,
} from './shared/content-provider/interfaces';

import {
  ICard,
  ICardQueryParam,
  ICardQueryResult,
} from './shared/content-provider/interfaces';

export { IArticle, IArticleQueryParam, IArticleQueryResult };
export { ICard, ICardQueryParam, ICardQueryResult };
