import { Injectable, PipeTransform } from '@nestjs/common';
import { QueryHeroDto } from '../dto/query-hero.dto';

@Injectable()
export class ParseHeroQueryBodyPipe implements PipeTransform {
  transform(value: any): QueryHeroDto {
    const limit = value.limit as string;
    const offset = value.offset as string;
    return {
      limit: parseInt(limit, 10),
      offset: parseInt(offset, 10),
    };
  }
}
