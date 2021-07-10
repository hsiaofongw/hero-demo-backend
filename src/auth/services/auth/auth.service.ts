import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable, of } from 'rxjs';
import { IUser } from 'src/user/interfaces';
import { UserService } from 'src/user/services/user/user.service';

type UserCredential = {
  username: string;
  password: string;
};

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  validateUser(credential: UserCredential): Observable<{ user?: IUser }> {
    return this.userService.findUserByUsername(credential.username);
  }

  login(user: IUser): Observable<{ token: string }> {
    const payload = { username: user.username, sub: user.username };
    return of({
      token: this.jwtService.sign(payload),
    });
  }
}
