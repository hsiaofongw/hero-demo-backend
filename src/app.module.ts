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
import { FriendModule } from './friend/friend.module';
import { ArticleModule } from './article/article.module';
import { DateTimeHelperModule } from './shared/date-time-helper/date-time-helper.module';

@Module({
  imports: [
    HeroModule,
    UserModule,
    ConfigModule.forRoot(),
    AuthModule,
    RegisterModule,
    LoginModule,
    ProfileModule,
    FriendModule,
    ArticleModule,
    DateTimeHelperModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
