import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { QueryHeroDto } from '../dto/query-hero.dto';
import { HeroService } from '../hero.service';
import { IHeroQueryResult } from '../interfaces';
import * as faker from 'faker';
import { Hero } from '../entities/hero.entity';

@Injectable()
export class MockHeroService implements HeroService {
  findHeroes(parameter: QueryHeroDto): Observable<IHeroQueryResult> {
    const heroes: Hero[] = [];
    for (let i = 0; i < parameter.limit; i++) {
      heroes.push({
        id: parameter.offset + i,
        name: faker.name.findName(),
      });
    }

    const defaultTotalCounts = 1000;

    return of({
      totalCounts: defaultTotalCounts,
      heroes: heroes,
    });
  }
}
