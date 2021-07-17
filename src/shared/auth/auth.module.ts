import { Logger, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { ExtractJwt } from 'passport-jwt';
import { UserService } from 'src/shared/user/services/user/user.service';
import { UserModule } from 'src/shared/user/user.module';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './services/auth/auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    UserModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService): JwtModuleOptions => {
        const jwtOption: JwtModuleOptions = {
          secret: configService.get('MASTER_KEY'),
          signOptions: {
            expiresIn: configService.get('JWT_EXPIRES_SEC') ?? '60000s',
          },
        };

        // const logger = new Logger(AuthModule.name);
        // logger.log(jwtOption);

        return jwtOption;
      },
      inject: [ConfigService],
    }),
    ConfigModule,
  ],
  providers: [
    AuthService,
    LocalStrategy,
    LocalAuthGuard,
    JwtAuthGuard,
    {
      provide: JwtStrategy,
      useFactory: (
        configService: ConfigService,
        userService: UserService,
      ): JwtStrategy => {
        return new JwtStrategy(
          {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get('MASTER_KEY'),
          },
          userService,
        );
      },
      inject: [ConfigService, UserService],
    },
  ],
  exports: [LocalAuthGuard, AuthService, JwtStrategy],
})
export class AuthModule {}
