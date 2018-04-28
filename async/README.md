### 异步编程 Promise 简单实现

Promise的意义在于规范化回调（永远看做是异步），解决信任危机等。链式调用的流程控制只是“Promise可以组合到一起”所带来的附加益处，而不是主要目的。

流程控制可以使用生成器、async之类的。

特点：
1. 本质还是回调函数
2. 区分成功和失败的回调，省去嵌套在内层的判断逻辑
3. 可以很轻松的完成回调函数模式到 Promise 模式的转化
4. 代码由回调函数嵌套的横向扩展，变为链式调用的纵向扩展，易于理解和维护

* [You Don't Know JS: Async & Performance](https://github.com/getify/You-Dont-Know-JS/blob/master/async%20%26%20performance/ch3.md)
