import { Module } from '@nestjs/common';
import { AuthModule } from 'src/shared/auth/auth.module';
import { UserModule } from 'src/shared/user/user.module';
import { ProfileController } from './controllers/profile/profile.controller';

@Module({
  controllers: [ProfileController],
  imports: [AuthModule, UserModule],
})
export class ProfileModule {}
