import { ApiProperty } from '@nestjs/swagger';

/** 查询说说需要的（分页）数据 */
export class QuerySaysDto {
  @ApiProperty({ description: '跳过记录数（分页参数）' })
  offset: string;

  @ApiProperty({ description: '限制记录数（单页长度）' })
  limit: string;
}
