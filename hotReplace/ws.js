const WebSocketServer = require('ws').Server;

/**
 * 验证
 * @param  {Object}   info origin、secure、req
 * @param  {Function} cb   用于显式指定拒绝时的 HTTP 状态码
 *                         result  Boolean  是否通过权限验证
 *                         code  Number  若 result 值为 false 时，表示 HTTP 的错误状态码
 *                         name  String  若 result 值为 false 时，表示 HTTP 状态码的错误信息
 * @return {[type]}        [description]
 */
function verify(info, cb) {
  return true;// 返回true时表示验权通过，否则客户端将抛出"HTTP Authentication failed"错误
}

const server = new WebSocketServer({
  port: 4000,
  // verifyClient: verify
});
server.on('connection', (s) => {
  // 监听客户端消息
  s.on('message', (msg) => {
    console.log('client say: %s', msg);
  });
  // 连接建立好后，向客户端发送一条消息
  s.send('server ready!');
});
