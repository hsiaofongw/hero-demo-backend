import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { ICardQueryResult } from 'src/article/interface';
import { cards as _cards } from '../../external/blog-content-center/data/cards';
import { ICardQueryParam } from '../../interfaces';

@Injectable()
export class LocalCardsProviderService {
  public getCardsSync(param: ICardQueryParam): ICardQueryResult {
    const offset = param.paging.offset;
    const endIdx = offset + param.paging.limit;
    const data = _cards.filter(param.predicate).slice(offset, endIdx);
    const total = _cards.length;

    return { offset, total, data };
  }

  public getCards(param: ICardQueryParam): Observable<ICardQueryResult> {
    return of(this.getCardsSync(param));
  }
}
