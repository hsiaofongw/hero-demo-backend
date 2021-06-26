import { Controller, Get, Logger, ParseIntPipe, Query } from '@nestjs/common';
import { HeroService } from './hero.service';
import { QueryHeroDto } from './dto/query-hero.dto';
import { Observable } from 'rxjs';
import { IHeroQueryResult } from './interfaces';

@Controller('hero')
export class HeroController {
  private readonly logger = new Logger(HeroController.name);

  constructor(private readonly heroService: HeroService) {}

  @Get()
  findHeroes(
    @Query('limit', new ParseIntPipe()) limit: number,
    @Query('offset', new ParseIntPipe()) offset: number,
  ): Observable<IHeroQueryResult> {
    const parameter: QueryHeroDto = {
      limit: limit,
      offset: offset,
    };
    return this.heroService.findHeroes(parameter);
  }
}
