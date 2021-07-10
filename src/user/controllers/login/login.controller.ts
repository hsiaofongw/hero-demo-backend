import {
  Body,
  Controller,
  Post,
  HttpException,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { LoginDto } from 'src/user/dto/login-dto';
import { UserService } from 'src/user/services/user/user.service';
import { map } from 'rxjs/operators';

@Controller('login')
export class LoginController {
  constructor(private userService: UserService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  login(
    @Body() loginDto: LoginDto,
  ): Observable<{ token?: string; error?: { message: string } }> {
    const userQuery = this.userService.findUserByUsername(loginDto.username);

    return userQuery.pipe(
      map((result) => {
        if (!result.user) {
          throw new HttpException('No Such User', HttpStatus.BAD_REQUEST);
        } else if (result.user.password !== loginDto.password) {
          throw new HttpException('UnAuthorized', HttpStatus.UNAUTHORIZED);
        } else {
          return { token: '1' };
        }
      }),
    );
  }
}
