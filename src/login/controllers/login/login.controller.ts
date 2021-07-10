import {
  Body,
  Controller,
  Post,
  HttpException,
  HttpStatus,
  HttpCode,
  UseGuards,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { concatAll, map, tap } from 'rxjs/operators';
import { LoginDto } from 'src/login/login-dto';
import { UserService } from 'src/user/services/user/user.service';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';
import { AuthService } from 'src/auth/services/auth/auth.service';
import { IUser } from 'src/user/interfaces';

@Controller('login')
export class LoginController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post()
  @HttpCode(HttpStatus.OK)
  login(
    @Body() loginDto: LoginDto,
  ): Observable<{ token?: string; error?: { message: string } }> {
    return this.userService.findUserByUsername(loginDto.username).pipe(
      tap((x: { user?: IUser }) => {
        if (!x.user) {
          throw new HttpException('No Such User', HttpStatus.BAD_REQUEST);
        }
      }),

      map((userObj: { user: IUser }) => {
        return this.authService.login(userObj.user);
      }),

      concatAll(),
    );
  }
}
