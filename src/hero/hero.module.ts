import { Module } from '@nestjs/common';
import { HeroService } from './hero.service';
import { HeroController } from './hero.controller';
import { MockHeroService } from './mock-hero/mock-hero.service';

@Module({
  controllers: [HeroController],
  providers: [
    MockHeroService,
    { provide: HeroService, useClass: MockHeroService },
  ],
})
export class HeroModule {}
