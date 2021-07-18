import { Module } from '@nestjs/common';
import { PingController } from './controllers/ping/ping.controller';

@Module({
  controllers: [PingController],
})
export class PingModule {}
