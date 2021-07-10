import { Logger, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './services/auth/auth.service';
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
  ],
  providers: [AuthService, LocalStrategy, LocalAuthGuard],
  exports: [LocalAuthGuard, AuthService],
})
export class AuthModule {}
