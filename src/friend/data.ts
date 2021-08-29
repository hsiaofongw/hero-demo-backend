import { IFriend } from './interface';
import { friends as _friends } from '../data/friends';

export const friends: IFriend[] = _friends.map((item) => ({
  websiteTitle: item.title,
  websiteURL: item.link,
  avatarURL: item.avatar,
  description: item.description,
  registerDate: item.addDate,
}));
