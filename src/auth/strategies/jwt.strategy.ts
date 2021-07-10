import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { JwtFromRequestFunction } from 'passport-jwt';
import { IUser } from 'src/user/interfaces';
import { UserService } from 'src/user/services/user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    configObject: {
      jwtFromRequest: JwtFromRequestFunction;
      ignoreExpiration: boolean;
      secretOrKey: string;
    },
    private userService: UserService,
  ) {
    super(configObject);
  }

  async validate(payload: { username: string }) {
    return new Promise((resolve: (userObject: { user: IUser }) => void) => {
      this.userService
        .findUserByUsername(payload.username)
        .subscribe((userQuery: { user?: IUser }) => {
          if (userQuery.user) {
            resolve(userQuery as { user: IUser });
          } else {
            throw new HttpException('No Such User', HttpStatus.BAD_REQUEST);
          }
        });
    });
  }
}
