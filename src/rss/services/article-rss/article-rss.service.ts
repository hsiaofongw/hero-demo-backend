import { Injectable } from '@nestjs/common';
import { metaData } from '../../../data/metaData';
import { articles as posts } from '../../../data/articles';
import { Feed } from 'feed';

interface IPostExcerptData {
  name: string;
  file: string;
  date: string;
  description?: string;
  prettyPath?: string;
}

export async function getPosts(): Promise<IPostExcerptData[]> {
  for (const p of posts) {
    const fileName = p.file;

    if ('prettyPath' in p) {
    } else {
      const pdfRegex = /\/(?<postId>[\w\d\-]+)\.pdf$/g;
      const markdownRegex =
        /markdown-blog-phi\.vercel\.app\/posts\/(?<postId>[\w\d\-]+)$/g;

      const matchForPDf = pdfRegex.exec(fileName);
      const matchForMarkdown = markdownRegex.exec(fileName);

      const postId =
        matchForPDf?.groups?.postId ||
        matchForMarkdown?.groups?.postId ||
        'unMatch';

      p['prettyPath'] = `/posts/${postId}`;
    }
  }

  return posts;
}

export async function makeFeed() {
  const posts = await getPosts();

  const title = metaData.title;
  const description = metaData.description;
  const id = 'https://exploro.one';
  const link = 'https://exploro.one';
  const favicon =
    'https://www.gravatar.com/avatar/dfa26ed25a72c40d602d33d854dd6f07?s=200';
  const copyright = 'All rights reserved 2021, Hsiao-Fong Wayne';
  const updated = new Date(posts[0].date);
  const generator = 'NestJS';

  const feedLinks = {
    json: 'https://exploro.one/feed/json',
    atom: 'https://exploro.one/feed/atom',
  };

  const author = {
    name: 'H. Wayne',
    email: 'hsiaofong.w@gmail.com',
    link: 'https://exploro.one',
  };

  const feed = new Feed({
    title,
    description,
    id,
    link,
    favicon,
    copyright,
    updated,
    generator,
    feedLinks,
    author,
  });

  posts.forEach((post) => {
    const title = post.name;
    const id = post.file;
    let link = post.file;
    if (post.prettyPath) {
      link = `https://exploro.one${post.prettyPath}`;
    }
    const description = post.description;
    const date = new Date(post.date);

    feed.addItem({
      title,
      id,
      link,
      description,
      date,
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
  getArticlesRss() {
    return makeFeed();
  }
}
