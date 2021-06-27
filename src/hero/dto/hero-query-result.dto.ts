import { ApiProperty } from '@nestjs/swagger';
import { Hero } from '../entities/hero.entity';
import { IHeroQueryResult } from '../interfaces';

export class HeroQueryResultDto implements IHeroQueryResult {
  @ApiProperty()
  totalCounts: number;

  @ApiProperty({ type: [Hero] })
  heroes: Hero[];
}
