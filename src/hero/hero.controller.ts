import { Controller, Get, Query } from '@nestjs/common';
import { HeroService } from './hero.service';
import { QueryHeroDto } from './dto/query-hero.dto';
import { Observable } from 'rxjs';
import { ParseHeroQueryBodyPipe } from './pipes/parse-hero-query-body.pipe';
import { HeroQueryResultSchema } from './schemas/hero-query-result.schema';
import { ApiCreatedResponse } from '@nestjs/swagger';

@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Get()
  @ApiCreatedResponse({
    description: '成功查询到英雄。',
    type: HeroQueryResultSchema,
  })
  findHeroes(
    @Query(ParseHeroQueryBodyPipe) parameter: QueryHeroDto,
  ): Observable<HeroQueryResultSchema> {
    return this.heroService.findHeroes(parameter);
  }
}
