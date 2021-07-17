import { ConfigService } from '@nestjs/config';
import { CreateUserDto } from '../../../register/create-user-dto';
import { v4 as uuid } from 'uuid';
import { UserService } from '../services/user/user.service';

export class UserServiceFactory {
  static createUserService(configService: ConfigService): UserService {
    const createUserDto = new CreateUserDto();
    createUserDto.username =
      configService.get<string>('MASTER_USERNAME') ?? uuid();
    createUserDto.password =
      configService.get<string>('MASTER_PASSWORD') ?? uuid();

    return new UserService(createUserDto);
  }
}
