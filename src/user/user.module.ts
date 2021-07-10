import { Module } from '@nestjs/common';
import { UserService } from './services/user/user.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserServiceFactory } from './factories/user-service-factory';

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: UserService,
      useFactory: UserServiceFactory.createUserService,
      inject: [ConfigService],
    },
  ],
  exports: [UserService],
})
export class UserModule {}
