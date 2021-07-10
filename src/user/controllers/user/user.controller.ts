import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  HttpStatus,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CreateUserDto } from 'src/user/dto/create-user-dto';
import { IUser } from 'src/user/interfaces';
import { UserService } from 'src/user/services/user/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  registerUser(
    @Body() userDto: CreateUserDto,
  ): Observable<{ error?: { message: string } }> {
    return this.userService.createUser(userDto);
  }

  /** DEV ONLY */
  @Get()
  getAllUser(): Observable<{ users: IUser[] }> {
    return of({ users: this.userService.dumpAllUsers() });
  }
}
