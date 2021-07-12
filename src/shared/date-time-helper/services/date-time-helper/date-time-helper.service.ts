import { Injectable } from '@nestjs/common';

/** 处理日期、时间，和日期时间字符串 */
@Injectable()
export class DateTimeHelperService {
  /** 将形如 '2021-01-02' 这样的日期字符串转成 Date 对象，假设时区为 GMT+8 */
  tranformLocaleDateStringToDateObject(date: string): Date {
    const now = new Date();
    const year = parseInt(date.slice(0, 4), 10);
    const month = parseInt(date.slice(5, 7), 10);
    const day = parseInt(date.slice(8, 10), 10);
    now.setFullYear(year, month - 1, day);
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);

    return now;
  }
}
