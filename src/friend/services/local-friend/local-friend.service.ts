import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { FriendService } from '../friend/friend.service';
import {} from '../../interface';
import { ICardQueryParam, ICardQueryResult } from 'src/article/interface';
import { LocalCardsProviderService } from 'src/shared/content-provider/services/local-cards-provider/local-cards-provider.service';

@Injectable()
export class LocalFriendService implements FriendService {
  constructor(private cardsProvider: LocalCardsProviderService) {}

  getCards(param: ICardQueryParam): Observable<ICardQueryResult> {
    return this.cardsProvider.getCards(param);
  }
}
