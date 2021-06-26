import { ApiProperty } from '@nestjs/swagger';

/** 查询英雄列表 Dto */
export class QueryHeroDto {
  /** 序号偏移量 */
  @ApiProperty({
    description: '线性偏移量',
    minimum: 0,
    example: 0,
  })
  offset: number;

  /** 数量限制 */
  @ApiProperty({
    description: '数量限制',
    minimum: 0,
    example: 20,
    default: 20,
  })
  limit: number;
}
