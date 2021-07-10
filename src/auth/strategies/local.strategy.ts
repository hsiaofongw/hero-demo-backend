import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { IUser } from 'src/user/interfaces';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(
    username: string,
    password: string,
  ): Promise<IUser | undefined> {
    return new Promise((resolve: (user: IUser) => void) => {
      this.authService
        .validateUser({ username, password })
        .subscribe((result: { user?: IUser }) => {
          if (!result.user) {
            throw new UnauthorizedException();
          }
          resolve(result.user);
        });
    });
  }
}
