import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { friends } from 'src/friend/data';
import { IFriendQueryResult } from 'src/friend/interface';
import { FriendService } from '../friend/friend.service';

@Injectable()
export class LocalFriendService implements FriendService {
  getAllFriends(): Observable<IFriendQueryResult> {
    return of({
      result: friends,
      totalCounts: friends.length,
      statusCode: 200,
      statusText: 'OK',
      offset: 0,
    });
  }
}
