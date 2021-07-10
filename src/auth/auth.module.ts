import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './services/auth/auth.service';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [UserModule],
  providers: [AuthService, LocalStrategy, LocalAuthGuard],
  exports: [LocalAuthGuard],
})
export class AuthModule {}
