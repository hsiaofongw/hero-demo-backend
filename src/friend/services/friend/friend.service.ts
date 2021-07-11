import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { IFriend, IFriendQueryResult } from 'src/friend/interface';

@Injectable()
export abstract class FriendService {
  abstract getAllFriends(): Observable<IFriendQueryResult>;
}
