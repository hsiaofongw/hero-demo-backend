import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from 'src/user/user.module';
import { LoginController } from './controllers/login/login.controller';

@Module({
  controllers: [LoginController],
  imports: [AuthModule, UserModule],
})
export class LoginModule {}
