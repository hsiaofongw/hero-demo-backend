import { Controller, Get, Query } from '@nestjs/common';
import { HeroService } from './hero.service';
import { QueryHeroDto } from './dto/query-hero.dto';
import { Observable } from 'rxjs';
import { IHeroQueryResult } from './interfaces';
import { ParseHeroQueryBodyPipe } from './pipes/parse-hero-query-body.pipe';

@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Get()
  findHeroes(
    @Query(ParseHeroQueryBodyPipe) parameter: QueryHeroDto,
  ): Observable<IHeroQueryResult> {
    return this.heroService.findHeroes(parameter);
  }
}
