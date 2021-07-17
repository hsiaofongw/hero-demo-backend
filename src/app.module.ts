import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroModule } from './hero/hero.module';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { ProfileModule } from './profile/profile.module';
import { FriendModule } from './friend/friend.module';
import { ArticleModule } from './article/article.module';
import { DateTimeHelperModule } from './shared/date-time-helper/date-time-helper.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SayModule } from './say/say.module';

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
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const connectionString = configService.get('MONGODB_CONNECTION_STRING');
        return {
          uri: connectionString,
        };
      },
      inject: [ConfigService],
    }),
    SayModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
