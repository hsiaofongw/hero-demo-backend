import { Module } from '@nestjs/common';
import { LoginController } from './controllers/login/login.controller';
import { UserController } from './controllers/user/user.controller';
import { UserService } from './services/user/user.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserServiceFactory } from './factories/user-service-factory';

@Module({
  imports: [ConfigModule],
  controllers: [LoginController, UserController],
  providers: [
    {
      provide: UserService,
      useFactory: UserServiceFactory.createUserService,
      inject: [ConfigService],
    },
  ],
})
export class UserModule {}
