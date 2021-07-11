import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IFriend, IFriendQueryResult } from 'src/friend/interface';
import { FriendService } from '../friend/friend.service';

type ServerReturn = {
  title: string;
  description: string;
  avatar: string;
  link: string;
  addDate: string;
}[];

@Injectable()
export class GithubRawContentFriendService implements FriendService {
  constructor(private httpService: HttpService) {}

  getAllFriends(): Observable<IFriendQueryResult> {
    const apiPath =
      'https://raw.githubusercontent.com/hsiaofongw/blog-data-nextjs/main/data/cards.json';
    const request = this.httpService.get<ServerReturn>(apiPath, {
      responseType: 'json',
    });
    const response = request.pipe(
      catchError((error: unknown) => {
        console.log(error);
        return of([]);
      }),

      map((serverReturn: AxiosResponse<ServerReturn>) => {
        const friends = serverReturn.data as ServerReturn[0][];
        const totalCounts = friends.length;
        const statusCode = serverReturn.status;
        const statusText = serverReturn.statusText;
        const offset = 0;

        const queryResult: IFriendQueryResult = {
          result: friends.map(
            (item) =>
              ({
                name: '',
                websiteTitle: item.title,
                websiteURL: item.link,
                email: '',
                avatarURL: item.avatar,
                description: item.description,
                registerDate: item.addDate,
              } as IFriend),
          ),
          totalCounts,
          statusCode,
          statusText,
          offset,
        };

        return queryResult;
      }),
    );

    return response;
  }
}
