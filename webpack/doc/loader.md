loader 是导出一个函数的 node 模块，当资源需要被转换的时候执行这个函数。

### 单个使用
当一个 loader 应用于资源时，接受一个字段，包含资源内容的字符串。

预期 loader 返回一个或两个值：
- string or buffer (JavaScript code)
- JavaScript object (SourceMap)

### 复合使用
当多个 loader 链式调用，执行顺序是返的，由右到左。

- 最后一个 loader 被第一个调用，传入原始资源
- 第一个 loader 最后一个调用，返回 JavaScript 和可选的 source map
- 中间的 loader 将结合前一个 loader 的结果被链式调用
