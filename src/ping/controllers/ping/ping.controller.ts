import { Body, Controller, Post } from '@nestjs/common';
import { PingDto } from 'src/ping/dtos/ping.dto';

@Controller('ping')
export class PingController {
  @Post()
  ping(@Body() pingDto: PingDto): PingDto {
    const pongTimestamp = new Date().valueOf();
    pingDto.pongTimestamp = pongTimestamp;
    return pingDto;
  }
}
