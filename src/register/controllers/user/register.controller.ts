import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  HttpStatus,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CreateUserDto } from 'src/register/create-user-dto';
import { IUser } from 'src/user/interfaces';
import { UserService } from 'src/user/services/user/user.service';

@Controller('')
export class RegisterController {
  constructor(private userService: UserService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  registerUser(
    @Body() userDto: CreateUserDto,
  ): Observable<{ error?: { message: string } }> {
    return this.userService.createUser(userDto);
  }

  /** DEV ONLY */
  @Get('users')
  getAllUser(): Observable<{ users: IUser[] }> {
    return of({ users: this.userService.dumpAllUsers() });
  }
}
