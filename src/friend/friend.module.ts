import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { FriendService } from './services/friend/friend.service';
import { FriendsController } from './controllers/friends/friends.controller';
import { LocalFriendService } from './services/local-friend/local-friend.service';

@Module({
  imports: [HttpModule],
  providers: [
    { provide: FriendService, useClass: LocalFriendService },
    LocalFriendService,
  ],
  controllers: [FriendsController],
})
export class FriendModule {}
