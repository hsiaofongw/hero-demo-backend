import { ApiProperty } from '@nestjs/swagger';
import { ICreateSayDto } from '../interface';

/** 创建说说 Dto */
export class CreateSayDto implements ICreateSayDto {
  /** 说说内容 */
  @ApiProperty({ description: '说说内容' })
  content: string;

  /** 用户 ID */
  @ApiProperty({ description: '用户ID' })
  authorId?: string;
}
