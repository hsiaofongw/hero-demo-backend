import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { IArticleQueryResult } from 'src/article/interface';
import { ArticleService } from 'src/article/services/article/article.service';

@Controller('articles')
export class ArticlesController {
  constructor(private articleService: ArticleService) {}

  @Get()
  getAllArticles(): Observable<IArticleQueryResult> {
    return this.articleService.getAllArticles();
  }
}
