> And sometimes, if you didn’t start with a good architecture, it can become difficult to keep your code organized.
> 一些时候，如果你的项目没有好的架构，将难以组织好你的代码。

这已经发生或将经发生在所有的开发者的职业生涯：
1. 你为几个人的开发团队构建一个客户端应用，一切都工作的很好。
2. 你的客户端需要增加几个新端功能，很好，你加上了。
3. 你的客户告诉你删除几个功能并增加一个功能，事情开始变得复杂，你并没有思考更多，但是你满足了客户的需求尽管不是很完美。
4. 你的客户现在需要你改变另一个功能，删除一些其它的并增加一个不在预期的功能。在这一点上，你开始修补你的代码，它满足需求，但是你不为它骄傲。
5. 六个月过后，在其它一些迭代过后，应用的代码变得复杂，难以阅读和理解，所有的事情看着像意大利面条。

当我们学习 `React` 时，会发现一些很好的文章解释如何创建 *Todo lists* 或者一些小游戏，它们很好的帮助我们理解 `React`。但是不能找到如何使用 React 构建我们实际上的应用，一些时候我们有十几个界面和上百个组件。

`Github` 上很多项目具有相似的结构，按类型组织所有的文件，如 `reducers`，`components` 等。这样的结构也许构建个人的站点和小的应用是足够的，但我相信这不是最好但架构。随着你的项目变大，它将变的难以维护。

## 组织规则

可以把应用里独立的代码片段定义为一个功能。

应遵循如下原则：
1. 一个 `component` 可以定义嵌套的 `component` 或 service，它不能使用或定义 `scenes`。
2. 一个 `scene` 可以定义嵌套 `component`，`scene` 或 `service`。
3. 一个 `sevice` 可以嵌套定义 `sevice`，它不能使用或定义 `component` 或 `scene`。
4. 嵌套功能只能在它父元素里工作。

我们已经知道什么是一个组件，但是这个组织中的一个重要的事情是将一个组件嵌入另一个组件的能力。

`sevice`，定义应用程序的核心业务逻辑，能被 `scenes` 和 `components` 使用的独立的模块。这可能最终被几个场景，甚至应用程序之间共享,如网络和本地版本的应用程序。建议创建 `sevice` 所有的请求 api。

`scenes` 和 `components` 只派发 `action`，读取 `store`，基于变化更新自己。

## 1. 通用结构

有两种方式去给文件分组：
1. *按类型分类(by type)*: 一个 *components*， 一个 *reducers*， 一个 *actions*， 等。
2. *按模块分类*(by feature): 拥有一个特性的所有文件放在同一个目录。

### 1.1 File-Type First (FTF)
按类型分类，适合用在小的项目里，增加一个新的特性需要增加 *reducers/myfeature.js, selectors/myfeature.js, components/MyFeature.js*，或者更多的文件。如果是大的项目，这样的结构使得我们每添加一个新的特性需要修改多个目录的内容。

```
app/
  reducers/
    root.js
    memberships.js
  components/
    home.jsx
    memberships.jsx
  ... of course more type folders/ ...
```
1. 初始组织结构简单
2. 不用考虑基础文件的放置位置，如继承模式
3. 相同类型的文件在同一目录下

### 1.2 Feature First (Pods)

与评论相关的所有文件放在 `app/comments` 目录下。

```
app/
  authentication/
    api/
    components/
    helpers/
    ...
  comments/
    actions/
    api/
    components/
    reducers/
    stores/
    ...
  ...
```

与 FTF 相比，按功能组织文件有如下优势：
1. 清晰的功能命名: 仍然由你命名功能，也许是困难的，但你不需要记住文件的名字来维护整个应用的分组。
2. 框架结构独立: 如果有新的技术或模式，你不需要有一堆顶级的文件目录，可以将框架按功能组织到相应存在的功能模块。
3. 入口文件是明显的
4. 在应用里分离代码是微不足道的

这样的文件结构有一个问题是我们应该把基础的文件放在哪里？有一个不雅的解决方式是把这些文件放在以框架命名的文件目录下。

```
app/
  flux/
    apiUtils.js
    baseActions.js
    baseStore.js
    connectToStores.js
```
## 样例

*[react-structure-exmple] (./trandition)

## 参考资料

### 实践

这个项目按视图(view)，或页面(page)组织文件：
```
[root]/
├── docs/                                 项目文档
├── statics(/public)/                     静态资源
│   ├── images/                           图片
│   ├── tpls/                             模版文件
│   └── fonts/                            字体
├── src/                                  项目目录
│   ├── config/                           公共配置信息
│   ├── constants/                        公共常量
│   ├── components/                       公共组件
│   ├── stylesheets/                      公共 CSS 变量、群
│   ├── utils/                            工具
│   ├── pages/                            模块目录
│   │   ├── components/                   项目组件
│   │   ├── module/                       项目子模块
│   │   ├── routes/                       路由文件
│   │   └── index.js                      入口文件
└── webpack.config.js/                    webpack 配置
└── README.md                             项目介绍
```
顶级结构
`src/`     存放所有与实际应用相关
`config/`  存放项目的配置信息


程序文件名和目录名均采用 **有意义的英文方式** 命名，不使用拼音或无意义的字母。

现仍没有惯用的方式组织我们的 Web 应用，这里我将描述我所使用的目录机构。

> As your app gets bigger, a feature-driven structure may be better. Splitting your application by functionality/resource would give you more power and control to scale and maintain it
