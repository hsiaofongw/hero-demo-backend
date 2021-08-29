import { Module } from '@nestjs/common';
import { FriendModule } from 'src/friend/friend.module';
import { RssController } from './controllers/rss/rss.controller';
import { ArticleRssService } from './services/article-rss/article-rss.service';

@Module({
  providers: [ArticleRssService],
  imports: [FriendModule],
  controllers: [RssController],
})
export class RssModule {}
