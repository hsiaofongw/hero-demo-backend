import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { IUser } from 'src/shared/user/interfaces';
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
    return new Promise(
      (
        resolve: (user: IUser) => void,
        reject: (reason: { error: { message: string } }) => void,
      ) => {
        this.authService
          .validateUser({ username, password })
          .subscribe((result: { user?: IUser }) => {
            if (!result.user) {
              reject(null);
            }
            resolve(result.user);
          });
      },
    );
  }
}
