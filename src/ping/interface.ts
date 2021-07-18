export interface IPing {
  /**
   * ping 类型：
   * 'ping' -> '问询', 一般是客户端发给服务端
   * 'pong' -> '回复', 一般是服务端返回给客户端
   */
  pingType: 'ping' | 'pong';

  /** ping 数据产生时的时间戳，形如 1626624971639 */
  pingTimestamp?: number;

  /** pong 数据产生时的时间戳，形如 1626624971639 */
  pongTimestamp?: number;
}
