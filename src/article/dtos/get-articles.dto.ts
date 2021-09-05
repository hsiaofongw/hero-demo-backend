import { ApiProperty } from '@nestjs/swagger';

export class ArticleQueryDto {
  @ApiProperty()
  offset: string;

  @ApiProperty()
  limit: string;
}
