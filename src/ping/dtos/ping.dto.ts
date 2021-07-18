import { ApiProperty } from '@nestjs/swagger';
import { IPing } from '../interface';

export class PingDto implements IPing {
  @ApiProperty({ description: '类型' })
  pingType: 'ping' | 'pong';

  @ApiProperty({ description: '客户端时间戳' })
  pingTimestamp: number;

  @ApiProperty({ description: '服务端时间戳' })
  pongTimestamp: number;
}
