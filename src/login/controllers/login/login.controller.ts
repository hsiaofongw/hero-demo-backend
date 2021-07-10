import {
  Body,
  Controller,
  Post,
  HttpException,
  HttpStatus,
  HttpCode,
  UseGuards,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { LoginDto } from 'src/login/login-dto';
import { UserService } from 'src/user/services/user/user.service';
import { map } from 'rxjs/operators';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';

@Controller('login')
export class LoginController {
  constructor(private userService: UserService) {}

  @UseGuards(LocalAuthGuard)
  @Post()
  @HttpCode(HttpStatus.OK)
  login(
    @Body() loginDto: LoginDto,
  ): Observable<{ token?: string; error?: { message: string } }> {
    return of({ token: '1' });
  }
}
