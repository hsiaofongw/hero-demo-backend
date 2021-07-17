import { Module } from '@nestjs/common';
import { AuthModule } from 'src/shared/auth/auth.module';
import { UserModule } from 'src/shared/user/user.module';
import { LoginController } from './controllers/login/login.controller';

@Module({
  controllers: [LoginController],
  imports: [AuthModule, UserModule],
})
export class LoginModule {}
