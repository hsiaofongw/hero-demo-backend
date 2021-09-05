import { Injectable } from '@nestjs/common';
import { Feed } from 'feed';
import { LocalMetadataProviderService } from 'src/shared/content-provider/services/local-metadata-provider/local-metadata-provider.service';
import { LocalArticlesProviderService } from 'src/shared/content-provider/services/local-articles-provider/local-articles-provider.service';
import { IArticle, IMetaData } from 'src/friend/interface';
import { zip } from 'rxjs';
import { map } from 'rxjs/operators';

type FeedInput = {
  posts: IArticle[];
  metadata: IMetaData;
};

export function makeFeed(inputData: FeedInput) {
  const posts = inputData.posts;
  const updated = new Date(posts[0].date);
  const metadata = inputData.metadata;

  const feed = new Feed({
    ...metadata,
    updated,
  });

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `https://exploro.one/articles/${post.file}`,
      link: `https://exploro.one/articles/${post.file}`,
      description: post.description,
      date: new Date(post.date),
    });
  });

  feed.addCategory('Technology');

  return {
    rss2: feed.rss2(),
    atom1: feed.atom1(),
    atom: feed.atom1(),
    json: feed.json1(),
  };
}

@Injectable()
export class ArticleRssService {
  constructor(
    private metadataService: LocalMetadataProviderService,
    private articlesService: LocalArticlesProviderService,
  ) {}

  getArticlesRss() {
    const metadata$ = this.metadataService.getMetadata();
    const posts$ = this.articlesService.getAllArticles();
    return zip(metadata$, posts$).pipe(
      map((data) => makeFeed({ metadata: data[0], posts: data[1].data })),
    );
  }
}
