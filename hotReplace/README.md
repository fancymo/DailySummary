### sourceEvent

EventSource 是 HTML5 中 Server-sent Events 规范的一种技术实现。EventSource 接口用于接收服务器发送的事件。它通过HTTP连接到一个服务器，以text/event-stream 格式接收事件, 不关闭连接。sourceEvent 基于 HTTP 协议，基于 Stream，默认端口号为 80。

### webSocket

webSocket 基于 TCP 的全双工通信，基于 Frame，默认端口号为 80。webSocket 不受同源策略限制。

具有如下优点：
1. 全双工，实时性更强
2. 相对于 HTTP 携带完整的请求头，websocket 请求头部明显减少
3. 保持连接状态，不用再验权
4. 二进制支持更强，Websocket 定义了二进制帧，处理更轻松
5. Websocket协议支持扩展，可以自定义的子协议

#### 1. 客户端请求

```
ws = new WebSocket('ws://127.0.0.1:4000/', ['abc','son_protocols']);
```

请求头主要字段：
```
/* 连接升级 */
Connection: Upgrade

/* 升级至 Websocket 协 */
Upgrade: websocket

/* 随机字符串,服务器根据它来构造一个SHA-1的信息摘要 */
Sec-WebSocket-Key:61x6lFN92sJHgzXzCHfBJQ==

/* Websocket版本 */
Sec-WebSocket-Version:13
```

#### 2. 服务端实现

#### 3. 发送和监听消息

```
/* 发送消息，可发送字符串，ArrayBuffer 或者 Blob数据 */
ws.onopen = function(e){
  ws.send('client ready!);
};

/* 监听消息 */
ws.onmessage = function(e){
  console.log('server say:', e.data);
};
```

#### 4. 关闭连接

```
/**
 * 关闭连接
 * @type {number}  code   关闭连接的状态号，默认是1000，即正常关闭
 * @type {string}  reason UTF-8文本，表示关闭的原因
 */
close(code, reason);
```

#### 5. Ping/Pong Frame 心跳连接

从客户端到服务端，中间存在着大量的网络链路，如路由器，防火墙等等。一份文件的上传要经过中间的层层路由转发，过滤。这些中间链路可能会认为一段时间没有数据发送，就自发切断两端的连接。由于TCP并不定时检测连接是否中断，而通信的双方又相互没有数据发送，客户端和服务端依然会一厢情愿的信任之前的连接，长此以往，将使得大量的服务端资源被WebSocket连接占用。

websocket协议实现时，设计者们便提供了一种 Ping/Pong Frame的心跳机制。一端发送Ping Frame，另一端以 Pong Frame响应。这种Frame是一种特殊的数据包，它只包含一些元数据，能够在不影响原通信的情况下维持住连接。

目前浏览器只能被动发送Pong Frame作为响应，web服务，可以采取服务端主动ping的方式，来保持住链接。



* [webpack与browser-sync热更新原理深度讲解](http://louiszhai.github.io/2017/04/19/hmr/)
