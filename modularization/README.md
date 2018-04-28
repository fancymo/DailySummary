Web 的发展伴随着如下问题，引发模块化的发展：

1. 随着站点的发展代码的复杂性增长（complexity）；
2. JS 文件/模块解偶的需求（decoupled）；
3. 优化代码减少 HTTP 请求（Deployment）；

### 1. 封装

#### 1.1 Namespace 模式

Global 被污染，很容易命名冲突。使用 Namespace 模式减少 Global 上的变量数目。

```
var MYAPP = {
    foo: function(){},
    bar: function(){}
}

MYAPP.foo();
```

但它本质上是对象，不安全。

#### 1.2 IIFE 模式

利用闭包实现。

```
var Module = (function(){
    var _private = "safe now";
    var foo = function(){
        console.log(_private)
    }

    return {
        foo: foo
    }
})()

Module.foo();
Module._private;
```

#### 1.3 引入依赖

模块模式，也是现代模块实现的基石。

```
var Module = (function($){
    var _$body = $("body");     // we can use jQuery now!
    var foo = function(){
        console.log(_$body);    // 特权方法
    }

    // Revelation Pattern
    return {
        foo: foo
    }
})(jQuery)

Module.foo();
```

### 2. 加载

```
body
    script(src="zepto.js")
    script(src="jhash.js")
    script(src="fastClick.js")
    script(src="iScroll.js")
```

1. 难以维护（maintain）；
2. 依赖模糊（Dependencies）；
3. 请求过多（HTTP calls）；

#### 2.1 Script Loader

加载和阻塞 JavaScript。

#### 3. Module Loader

#### 3.1 YUI3（2009）

所有依赖模块通过在当前 YUI 实例上执行模块的初始化代码，使得模块在当前实例上可用的方式被注入。

```
// hello.js
YUI.add('hello', function(Y){
    Y.sayHello = function(msg){
        Y.DOM.set(el, 'innerHTML', 'Hello!');
    }
},'3.0.0',{
    requires:['dom']
})

// main.js
YUI().use('hello', function(Y){
    Y.sayHello("hey yui loader");
})
```

```
script(src="http://yui.yahooapis.com/3.0.0/build/yui/yui-min.js")
script(src="http://yui.yahooapis.com/3.0.0/build/dom/dom-min.js")

// ==>
// 单个请求返回多个文件，需要服务端支持（alibaba/nginx-http-concat）
script(src="http://yui.yahooapis.com/combo?
    3.0.0/build/yui/yui-min.js&
    3.0.0/build/dom/dom-min.js")
```

### 3 COMMONJS（2009.08）

在服务端，

CommonJS 原名 ServerJS，推出 Modules/1.0 规范后，在 Node.js 等环境下取得了很好的实践。

#### 3.1 [MODULES/1.0](http://wiki.commonjs.org/wiki/Modules/1.0)

模块的引用与定义。

模块上下文：
1. 在模块中有一个变量 `require`，这是一个函数。require 导出API。如果存在循环依赖，依赖模块未执行完毕，require 返回的对象至少包含 exports；
2. 在模块中有一个变量 `exports`，模块在执行时，可以为其添加 API 的对象；
3. 必须使用 exports 对象作为唯一的导出方式。

模块标识符：
1. 模块标识符是由'/'分隔的字符串；
2. camelCase 标识符，或者'.''..'；
3. 模块标识符也许没有扩展名，如'.js'；
4. 模块标识符也许是相对路径，或者基于 'top-level'；

```
// math.js
exports.add = function(a, b){
    return a + b;
}

// main.js
var math = require('math')      // 执行到此时，math.js 同步下载并执行
console.log(math.add(1, 2));    // 3
```

#### 3.2 [MODULES/1.1](http://wiki.commonjs.org/wiki/Modules/1.1)

#### 3.3 分歧

Modules/AsynchronousDefinition: 定义异步加载模块及其依赖关系，非常适合解决在浏览器端同步加载导致的性能、易用、调试、跨域等问题。

Modules/Wrappings: define 可以换成 module.declare。正式上线前，需要通过构建工具先转换为 Modules/Transport 格式。典型代表为 AMD 规范及其实现 RequireJS。
```
define(function(require, exports, module) {
   //
})
// ===>
module.declare(function(require, exports, module)
{
    exports.foo = "bar";
});
// ===> 转换格式
define("id", ["dep-1", "dep-2"], function(require, exports, module) {
   // source code
})
```

Modules/Transport: 在压缩、合并前，需要先做一些处理，这些处理就是 transport 操作。

```
define(id, deps, factory)
```

#### 3.4 AMD（2011）

RequireJS 实现。

```
// AMD recommended style
define(["a", "b"], function(a, b){ // 依赖前置
    a.doSomething();
    b.doSomething();
})
```

```
// AMD with CommonJS sugar
define(["require"], function(require){
    // 在这里, a.js 已经下载并且执行好了
    var a = require("./a")
})
```

#### 3.5 CMD（2011）

SeaJS 实现。

### 4. modules in browsers

为 script 标签添加属性 `type=moudle`，浏览器会将内联或者外部脚本视为 ECMAScript 模块。

Defer default: defer 属性默认为 true，延迟脚本执行，直到文档完成解析。

Always CORS: 跨域脚本无法加载执行。

No credentials: 若要将 cookie 发送到

Mime-types: 与常规脚本不同，必须运行在有效的 Javascript 类型下，否则不会执行。

```
<script type="module">
  import {addTextToBody} from './utils.js';

  addTextToBody('Modules are pretty cool.');
</script>

// utils.js
export function addTextToBody(text) {
  const div = document.createElement('div');
  div.textContent = text;
  document.body.appendChild(div);
}
```

模块标识符：
1. 完整的绝对 URL，`new URL(moduleSpecifier)`；
2. 以 `/`，`./`，`../` 开头。

### 5. Http 2.0

> js 模块化定义的再美好，浏览器端的支持粒度永远是瓶颈，http 2.0 正是考虑到了这个因素，大力支持了 ES 2015 模块化规范。

随着 HTTP/2 流行起来，请求和响应可以并行，一次连接允许多个请求，对于前端来说宣告不再需要在开发和上线时再做编译这个动作。

### 6. 构建工具

不论是 CommonJS 还是 AMD 包括之后的方案都无法解决 CSS 与 HTML 模块化的问题。

对于 CSS 本身它就是 global scope，社区涌现把 HTML、CSS 和 JS 合并作模块化的方案，但都依赖于 webpack/rollup 等构建工具。

#### 6.1 Browserify（2011/2014stable）- CommonJS In Browser

Browserify 遍历项目为 require calls 解析 AST。

逆向所有合并、压缩、混淆，得到 soure map 文件用于 debug。

#### 6.2 Webpack - Module Bundler

### 7. 展望

> 从 js 模块化发展史，我们还看到了 css html 模块化方面的严重落后，如今依赖编译工具的模块化增强在未来会被标准所替代。

原生支持的模块化，解决 html 与 css 模块化问题正是以后的方向。

### 参考文献

* [ECMAScript modules in browsers](https://jakearchibald.com/2017/es-modules-in-browsers/)
