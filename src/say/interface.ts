/** 个人说说 */
export interface ISay {
  /** 这条说说的 ID */
  id: string;

  /** 作者的用户 ID */
  authorId: string;

  /** 创建时间 */
  createdAt: number;

  /** 内容 */
  content: string;

  /** 赞同数 */
  voteFors: number;

  /** 反对数 */
  voteAgainsts: number;
}

/** 说说查询结果 */
export interface ISayQueryResult {
  /** 总数 */
  totalCounts: number;

  /** 起始记录编号（用于分页填充） */
  offset: number;

  /** 查询结果，一个说说列表 */
  result: ISay[];
}

/** 创建说说 Dto */
export interface ICreateSayDto {
  /** 说说内容 */
  content: string;
}

/** 查询说说需要的（分页）数据 */
export interface IQuerySaysDto {
  offset: string;

  limit: string;
}

/** 删除说说需要的参数 */
export interface IDeleteSayDto {
  /** 说说的 ID */
  id: string;
}

/** 删除说说返回结果 */
export interface IDeleteResult {
  /** 删除成功时，值为 1 */
  ok?: number;
  n?: number;

  /** 被删除的数量 */
  deletedCount?: number;
}
