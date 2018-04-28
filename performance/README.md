总结篇。

加载资源阶段：
1. 缓存;
2. dns 预解析，域名发散，域名收敛;


运行阶段：
1. 减少重排序和重绘，详情可见[DOM篇章](../DOM);
2.


服务器处理部分：
1. 缓存;
2. 建立连接的重点是长连接和链接复用，keep-alive，long-polling，http-straming，websocket等;
3. CDN;
4. 服务器发送响应环节，可以使用Transfer-Encoding=chunked;
5. 减少对Cookie的依赖: 每次GET或POST请求，都会把Cookie都带上，增加网络传输流量，导致增长交互时间;
5. 减少对HTTPS加密协议的使用: 通过HTTPS请求的资源，默认是不会被缓存的，必须通过特殊的配置，才能让资源得到缓存;
6. hsts;
7. SSR;

其它：
1. 同一个资源保证URL的稳定性: URL是浏览器缓存机制的基础;
