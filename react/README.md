## 1. React 相关的资料

### 1.1 文档

* [react 设计](./reactDevise.md)

* [Container Components](https://medium.com/@learnreact/container-components-c0e67432e005)

> A container does data fetching and then renders its corresponding sub-component. That’s it.

* [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

* [A Better File Structure For React/Redux Applications](https://marmelab.com/blog/2015/12/17/react-directory-structure.html)

* [Organizing Large React Applications](http://engineering.kapost.com/2016/01/organizing-large-react-applications/)

* [How to better organize your React applications?](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1)

> And sometimes, if you didn’t start with a good architecture, it can become difficult to keep your code organized.

* [A Survey on Tree Edit Distance and Related Problems](http://grfia.dlsi.ua.es/ml/algorithms/references/editsurvey_bille.pdf)

* [Why Composition is Harder with Classes](https://medium.com/javascript-scene/why-composition-is-harder-with-classes-c3e627dcd0aa)

### 1.2 性能优化
* [React移动web极致优化](https://github.com/lcxfs1991/blog/issues/8)

### 1.3 例子

* [react-redux-universal-hot-example](https://github.com/erikras/react-redux-universal-hot-example)

## 2. Node 相关资料

### 2.1 NPM
* [Introduction to Using NPM as a Build Tool](https://medium.com/javascript-training/introduction-to-using-npm-as-a-build-tool-b41076f488b0)

* [Better local require() paths for Node.js](https://gist.github.com/branneman/8048520)

## 3. 工程化相关

3.1 CSS 架构

* [CSS STILL SUCKS 2015](https://huangxuan.me/css-sucks-2015/#/)

* [OOCSS](https://github.com/stubbornella/oocss/wiki)
* [BEM](https://www.smashingmagazine.com/2012/04/a-new-front-end-methodology-bem/)
* [CSS Modules 详解及 React 中实践](https://github.com/camsong/blog/issues/5)

* [SASS-lint]()

3.1 JS 模块化

* [JAVASCRIPT MODULARIZATION ](https://huangxuan.me/js-module-7day/#/)
* [模块化](../modularization)

3.2 React + Redux 架构规范

* [Redux + React 应用程序架构的 3 条规范（内附实例）](https://zhuanlan.zhihu.com/p/21490605)

- 基于特性进行组织
- 设计严格的模块边界（设计模块对外暴露的公共接口、避免跟其他模块的状态相耦合

## 4. React Router 相关问题
* [React-router urls don't work when refreshing or writting manually
](https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writting-manually/37449679#37449679?newreg=73bfe3b72b484aaab21dde3c5787a780)

## 5. webpack 打包优化

5.1 补充

- 使用 uglifyjs-webpack-plugin 代替 webpack.optimize.UglifyJsPlugin，标识出了那些“未引用代码(dead code)”，从 bundle 中删除，tree-shaking
- 使用 webpack-merge 的工具区分各种环境，实践中发现打包的体积比 Object.assign 合并小

优化结果可见[opt目录](./opt)，编译时间减少至原来的 1/3，文件编译体积为原来的 1/4。

* [webpack2 终极优化](http://imweb.io/topic/5868e1abb3ce6d8e3f9f99bb)
