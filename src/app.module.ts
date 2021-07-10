import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroModule } from './hero/hero.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [
    HeroModule,
    UserModule,
    ConfigModule.forRoot(),
    AuthModule,
    RegisterModule,
    LoginModule,
    ProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
