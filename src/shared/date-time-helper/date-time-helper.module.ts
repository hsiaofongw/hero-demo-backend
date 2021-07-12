import { Module } from '@nestjs/common';
import { DateTimeHelperService } from './services/date-time-helper/date-time-helper.service';

@Module({
  providers: [DateTimeHelperService],
  exports: [DateTimeHelperService],
})
export class DateTimeHelperModule {}
