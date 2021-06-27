import { Controller, Get, Query } from '@nestjs/common';
import { HeroService } from './hero.service';
import { QueryHeroDto } from './dto/query-hero.dto';
import { Observable } from 'rxjs';
import { ParseHeroQueryBodyPipe } from './pipes/parse-hero-query-body.pipe';
import { HeroQueryResultDto } from './dto/hero-query-result.dto';
import { ApiCreatedResponse } from '@nestjs/swagger';

@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Get()
  @ApiCreatedResponse({
    description: '成功查询到英雄。',
    type: HeroQueryResultDto,
  })
  findHeroes(
    @Query(ParseHeroQueryBodyPipe) parameter: QueryHeroDto,
  ): Observable<HeroQueryResultDto> {
    return this.heroService.findHeroes(parameter);
  }
}
