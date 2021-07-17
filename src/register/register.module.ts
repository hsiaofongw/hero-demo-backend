import { Module } from '@nestjs/common';
import { UserModule } from 'src/shared/user/user.module';
import { RegisterController } from './controllers/user/register.controller';

@Module({
  controllers: [RegisterController],
  imports: [UserModule],
})
export class RegisterModule {}
