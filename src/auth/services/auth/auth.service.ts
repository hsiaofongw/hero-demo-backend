import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { IUser } from 'src/user/interfaces';
import { UserService } from 'src/user/services/user/user.service';

type UserCredential = {
  username: string;
  password: string;
};

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  validateUser(credential: UserCredential): Observable<{ user?: IUser }> {
    return this.userService.findUserByUsername(credential.username);
  }
}
