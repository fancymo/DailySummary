### 1 浏览器同源策略

同源策略限制从一个源加载的文档或脚本如何与来自另一个源的资源进行交互。这是一个用于隔离潜在恶意文件的关键的安全机制。

如果协议，端口（如果指定了一个）和域名对于两个页面是相同的，则两个页面具有相同的源。

IE 例外:
- 授信范围（Trust Zones）：两个相互之间高度互信的域名，如公司域名（corporate domains），不遵守同源策略的限制。
- 端口：IE未将端口号加入到同源策略的组成部分之中。

### 2 跨域解决方案

#### 1.1 源的更改
页面可能会更改其自己的来源。

但有些限制，脚本可以将 document.domain 的值设置为其当前域或其当前域的超级域。如果将其设置为其当前域的超级域，则较短的域将用于后续原始检查。

浏览器单独保存端口号。任何的赋值操作，包括document.domain = document.domain都会以null值覆盖掉原来的端口号。

#### 1.2 嵌入跨源资源

1. <script src="..."></script>标签嵌入跨域脚本。
2. <link rel="stylesheet" href="...">标签嵌入CSS。
3. <img>嵌入图片。
4. <video> 和 <audio>嵌入多媒体资源。
5. <object>, <embed> 和 <applet>的插件。
6. @font-face引入的字体。
7. <frame> 和 <iframe>载入的任何资源，站点可以使用X-Frame-Options消息头来阻止这种形式的跨域交互。

#### 1.3 jsonp

JSONP是JSON with padding(填充式JSON或参数式JSON)的简写，是应用JSON的一种方式。

JSONP的实现原理很简单，利用<script>标签没有同源限制的特点，也就是<script>的src链接可以访问不同源的。不受同源限制的还有<img>、<iframe>、<link>。

访问服务端，一般是获取存JSON数据，而JSONP则返回的是，包含函数的数据,将我们需要的JSON数据作为函数的参数

```
jsonpCb({"name": "xuthus"})
```

在客户端则一般通过<script>标签的src访问带有callback查询参数的请求，来获取返回带有函数的数据，然后执行它
```
<script>
    function jsonpCb(result) {
        console.log(result)
    }
</script>
<script src="http://localhost:3000/user?callback=jsonpCb"></script>
```

#### 1.4 CORS 允许跨源访问

#### 阻止跨源访问

### 参考资料

* (浏览器的同源策略)[https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy]
* (跨域请求之cookie)[https://fancymo.github.io/2017-08-03/%E8%B7%A8%E5%9F%9F%E8%AF%B7%E6%B1%82%E4%B9%8Bcookie/]
