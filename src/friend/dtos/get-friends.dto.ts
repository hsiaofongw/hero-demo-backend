import { ApiProperty } from '@nestjs/swagger';

export class GetFriendsDto {
  @ApiProperty()
  offset: string;

  @ApiProperty()
  limit: string;
}
