import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { FriendService } from './services/friend/friend.service';
import { GithubRawContentFriendService } from './services/github-raw-content-friend/github-raw-content-friend.service';
import { FriendsController } from './controllers/friends/friends.controller';

@Module({
  imports: [HttpModule],
  providers: [
    { provide: FriendService, useClass: GithubRawContentFriendService },
    GithubRawContentFriendService,
  ],
  controllers: [FriendsController],
})
export class FriendModule {}
