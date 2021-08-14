/** 加入聊天室请求数据 */
export interface IJoinRoomDto {
  /** 用户唯一 ID */
  username: string;

  /** 用户全名 */
  fullname: string;

  /** 用户博客网站 */
  website?: string;

  /** 用户电子邮箱 */
  email: string;

  /** 用户头像地址 */
  avatar?: string;
}

/** 加入聊天室请求结果 */
export interface IJoinRoomResult {
  /** 凭此 token 向聊天室中发送信息 */
  playerSecretToken?: string;
}

/** 发送消息（向聊天室中发送消息） */
export interface ISendMessageDto {
  /** 身份口令 */
  playerSecretToken: string;

  /** 发送内容（纯文本） */
  message: {
    content: string;
  };
}

/** 消息 */
export interface IChatRoomMessage {
  /** 消息 ID */
  id: string;

  /** 消息内容 */
  content: string;

  /** 产生时间 */
  createdAt: number;

  /** 用户 id */
  username: string;

  /** 用户全名 */
  fullname: string;

  /** 用户头像 */
  avatar?: string;

  /** 用户网站 */
  website?: string;

  /** 用户电子邮箱地址 */
  email: string;

  /** 回复消息 ID */
  replyTo?: string;
}
