import { ApiProperty } from '@nestjs/swagger';

/** 一个英雄实例 */
export class Hero {
  /** 英雄的 ID */
  @ApiProperty()
  id: number;

  /** 英雄的姓名 */
  @ApiProperty()
  name: string;
}
