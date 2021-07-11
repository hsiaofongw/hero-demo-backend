export interface IFriend {
  /** 个人称呼 */
  name?: string;

  /** 网站名称 */
  websiteTitle: string;

  /** 网站地址 */
  websiteURL: string;

  /** 电子邮件 */
  email?: string;

  /** 网络头像 */
  avatarURL: string;

  /** 自述 */
  description: string;

  /** 添加日期 */
  registerDate: string;
}

export interface IFriendQueryResult {
  offset: number;
  totalCounts: number;
  statusCode: number;
  statusText?: string;
  result: IFriend[];
}
