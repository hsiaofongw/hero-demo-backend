import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ICardQueryParam, ICardQueryResult } from 'src/friend/interface';

@Injectable()
export abstract class FriendService {
  abstract getCards(param: ICardQueryParam): Observable<ICardQueryResult>;
}
