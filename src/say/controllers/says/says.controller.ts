import {
  Body,
  Controller,
  Get,
  Query,
  Post,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { from } from 'rxjs';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateSayDto } from 'src/say/dtos/create-say.dto';
import { QuerySaysDto } from 'src/say/dtos/query-says.dto';
import { SayService } from 'src/say/services/say/say.service';
import { IUser } from 'src/user/interfaces';

@Controller('says')
export class SaysController {
  constructor(private sayService: SayService) {}

  /** 创建一条说说 */
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Post()
  createSay(@Body() createSayDto: CreateSayDto, @Req() request) {
    const user = request.user as { user: IUser };
    createSayDto.authorId = user.user.username;
    return from(this.sayService.createSayAsync(createSayDto));
  }

  @Get()
  getSay(@Query() querySaysDto: QuerySaysDto) {
    return from(this.sayService.getSaysAsync(querySaysDto));
  }
}
