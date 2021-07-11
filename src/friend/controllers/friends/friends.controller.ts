import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { IFriendQueryResult } from 'src/friend/interface';
import { FriendService } from 'src/friend/services/friend/friend.service';

@Controller('friends')
export class FriendsController {
  constructor(private friendService: FriendService) {}

  @Get()
  getAllFriends(): Observable<IFriendQueryResult> {
    return this.friendService.getAllFriends();
  }
}
