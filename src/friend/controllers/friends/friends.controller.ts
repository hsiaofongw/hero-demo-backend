import { Controller, Get, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { GetFriendsDto } from 'src/friend/dtos/get-friends.dto';
import { ICardQueryResult } from 'src/friend/interface';
import { FriendService } from 'src/friend/services/friend/friend.service';

@Controller('friends')
export class FriendsController {
  constructor(private friendService: FriendService) {}

  @Get()
  getFriends(@Query() param: GetFriendsDto): Observable<ICardQueryResult> {
    const limit = parseInt(param.limit);
    const offset = parseInt(param.offset);
    return this.friendService.getCards({
      paging: { limit, offset },
      predicate: () => true,
    });
  }
}
