import { Hero } from './entities/hero.entity';

export interface IHeroQueryResult {
  totalCounts: number;
  heroes: Hero[];
}
