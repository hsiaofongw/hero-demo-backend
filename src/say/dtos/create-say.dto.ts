import { ApiProperty } from '@nestjs/swagger';

/** 创建说说 Dto */
export class CreateSayDto {
  /** 说说内容 */
  @ApiProperty({ description: '说说内容' })
  content: string;

  /** 用户 ID */
  @ApiProperty({ description: '用户ID' })
  authorId?: string;
}
