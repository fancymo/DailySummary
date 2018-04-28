根据 umi 的优化 list，学习总结如下知识点。

### PWA

### Tree Shake

tree shaking 是一个术语，通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code)。它依赖于 ES2015 模块系统中的静态结构特性，例如 import 和 export。这个术语和概念实际上是兴起于 ES2015 模块打包工具 rollup。

我们已经通过 import and export 语法，标识出了那些“未引用代码(dead code)”。UglifyJSPlugin 删除未引用代码(dead code)。



### antd(-mobile) 启用 ES Module

### Scope Hoist

### 公共文件的智能提取

### 页面级的按需加载

### Inline Critical CSS

### 提供 umi/dynamic 和 import() 语法，分别用于懒加载组件和模块

### 静态化的 SSR 处理

### link rel=preload
* [Prioritizing Your Resources with link rel='preload'](https://developers.google.com/web/updates/2016/03/link-rel-preload)
* [通过rel="preload"进行内容预加载](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Preloading_content)

### hash 构建及服务端支持（云凤蝶）

### 通过 react-constant-elements 和 react-inline-elements 提升 rerender 性能

### Progressive image loading

* [How Medium does progressive image loading
](https://jmperezperez.com/medium-image-progressive-loading-placeholder/)
