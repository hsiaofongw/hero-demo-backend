import { Body, Controller, HttpCode, Post, HttpStatus } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CreateUserDto } from 'src/register/create-user-dto';
import { UserService } from 'src/shared/user/services/user/user.service';

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
}
