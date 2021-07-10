import { Injectable, Logger } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CreateUserDto } from 'src/register/create-user-dto';
import { IUser } from 'src/user/interfaces';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UserService {
  private users: IUser[] = [];
  private readonly logger = new Logger(UserService.name);

  constructor(masterUser: CreateUserDto) {
    this.createUser(masterUser).subscribe(() => {
      this.logger.log('Master user created');
    });
  }

  createUser(
    createUserDto: CreateUserDto,
  ): Observable<{ error?: { message: string } }> {
    const username = createUserDto.username;
    const password = createUserDto.password;
    this.users = [
      ...this.users,
      { id: uuid(), username: username, password: password },
    ];

    return of({});
  }

  findUserByUsername(username: string): Observable<{ user?: IUser }> {
    const users = this.users.filter((user) => user.username === username);
    if (users.length >= 1) {
      return of({ user: users[0] });
    }

    return of({});
  }

  dumpAllUsers(): IUser[] {
    return this.users;
  }
}
