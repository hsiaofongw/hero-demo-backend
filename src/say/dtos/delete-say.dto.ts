import { ApiProperty } from '@nestjs/swagger';
import { IDeleteSayDto } from '../interface';

export class DeleteSayDto implements IDeleteSayDto {
  @ApiProperty({ description: '说说 ID' })
  id: string;
}
