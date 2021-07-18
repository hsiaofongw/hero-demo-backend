import {
  Body,
  Controller,
  Get,
  Query,
  Post,
  UseGuards,
  Req,
  Delete,
  Param,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { from, Observable } from 'rxjs';
import { JwtAuthGuard } from 'src/shared/auth/guards/jwt-auth.guard';
import { CreateSayDto } from 'src/say/dtos/create-say.dto';
import { QuerySaysDto } from 'src/say/dtos/query-says.dto';
import { SayService } from 'src/say/services/say/say.service';
import { IUser } from 'src/shared/user/interfaces';
import { DeleteSayDto } from 'src/say/dtos/delete-say.dto';
import { IDeleteResult } from 'src/say/interface';

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

  /** 删除一条说说 */
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Delete(':id')
  deleteSayById(
    @Param() deleteSayDto: DeleteSayDto,
  ): Observable<IDeleteResult> {
    return from(this.sayService.deleteSayByIdAsync(deleteSayDto));
  }

  /** 按分页参数查询说说 */
  @Get()
  getSay(@Query() querySaysDto: QuerySaysDto) {
    return from(this.sayService.getSaysAsync(querySaysDto));
  }
}
