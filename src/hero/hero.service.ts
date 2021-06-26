import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { QueryHeroDto } from './dto/query-hero.dto';
import { IHeroQueryResult } from './interfaces';

@Injectable()
export abstract class HeroService {
  abstract findHeroes(parameter: QueryHeroDto): Observable<IHeroQueryResult>;
}
