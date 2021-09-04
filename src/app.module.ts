import { Module } from '@nestjs/common';
import { UserModule } from './shared/user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './shared/auth/auth.module';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { ProfileModule } from './profile/profile.module';
import { FriendModule } from './friend/friend.module';
import { ArticleModule } from './article/article.module';
import { DateTimeHelperModule } from './shared/date-time-helper/date-time-helper.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SayModule } from './say/say.module';
import { PingModule } from './ping/ping.module';
import { ChatroomModule } from './chatroom/chatroom.module';
import { RssModule } from './rss/rss.module';
import { MarkdownModule } from './shared/markdown/markdown.module';
import { ContentProviderModule } from './shared/content-provider/content-provider.module';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({ envFilePath: ['.env.secret', '.env'] }),
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
    PingModule,
    ChatroomModule,
    RssModule,
    MarkdownModule,
    ContentProviderModule,
  ],
})
export class AppModule {}
