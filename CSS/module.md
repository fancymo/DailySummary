CSS 模块化遇到的问题：
1. 全局污染：全局选择器机制来设置样式
2. 依赖
3. JS CSS 无法共享变量


### 1. [OOCSS](https://github.com/stubbornella/oocss/wiki) - Object Oriented CSS (Nicole Sullivan 2008)

用CSS“对象”分隔容器和内容 (Nicole Sullivan 2008)。

- class everything for reusablity
- separate structure and skin
  reuse visual feature and skin
  structure semantics
  reference classes instead of HTML Tags
- separate container and content

OOCSS追求元件的复用，其class命名比较抽象，一般不体现具体内容。风格：增加class，不使用继承选择符。

```
<div class="media attribution">
  <a href="http://twitter.com/stubbornella" class="img">
    <img src="http://stubbornella.com/profile_image.jpg" alt="me" />
  </a>
  <div class="bd">
    @Stubbornella 14 minutes ago
  </div>
</div>
```

```
/* ====== media ====== */
.media {margin:10px;}
.media, .bd {overflow:hidden; _overflow:visible; zoom:1;}
.media .img {float:left; margin-right: 10px;}
.media .img img{display:block;}
.media .imgExt{float:right; margin-left: 10px;}
```

#### 1.1 用 class 管理方便复用

#### 1.2 分离 structure 和 skin

分离结构和主题是在于将一些视觉样式效果（例如background、color）作为单独的“主题”来应用。在上面的例子中的阴影效果，没有被直接写在media的样式规则内，而是被单独写在了一个名为media-shadow的class中。因此，它成为了可选择、可拆分的主题。

- 复用视觉上的特征作为 skin
- 通过 structure 的 class 实现 structure 语义化
- 引用 class 代替 HTML 标签

#### 1.3 分离 container 和 content

分离容器和内容要求使页面元素不依赖于其所处位置。在上面的例子中，css的选择符都很短，无继承选择符（例如.header .media { }），所以，这个图文排列的元件，可以在任何地方使用，且会有一致的外观。

- 减少使用依赖位置的样式
- Classes over tags, 避免使用派生 selector
- 一个对象不论位置如何应该拥有相同的外表

### 2. [SMACSS](https://smacss.com/) - Scalable And Modular Architecture For CSS

样式指南为CSS规则编写五个类别的CSS (Jonathan Snook 2012)。

着力于实现两个主要目标：
- 更语义化的 html 和 css
- 降低对特定 html 结构的依赖

#### 2.1 为 CSS Rules 分类

Base, Layout, Module, State, Theme

#### 2.2 命名规则

Naming Rules是说在想class等的命名时，考虑用命名体现样式对应的类别。

按照前面5种的划分，Layout Rules用l-或layout-这样的前缀，例如：.l-header、.l-sidebar。

Module Rules用模块本身的命名，例如图文排列的.media、.media-image。

State Rules用is-前缀，例如：.is-active、.is-hidden。

Theme Rules如果作为单独class，用theme-前缀，例如.theme-a-background、.theme-a-shadow。

Base Rules不会用到class和ID，是以标签选择符为主的样式，例如p、a，无需命名。

#### 2.3 最小化适配深度

### 3 预处理

- 变量(Variables)
- 嵌套(Nesting)
- 混淆(Minxins)
- 选择器继承(Selector inheritance)
- Language Enhancement

#### 3.1 [stylus](http://stylus-lang.com/)

(2010)

#### 3.2 [sass](http://sass-lang.com/)

(2006)

#### 3.3 [less](http://lesscss.org/)

(2009)

#### 3.4 [PostCSS](https://github.com/postcss/postcss)

(Since Sep 2013)

PostCSS 是用 JS 插件转化 CSS 的工具，支持变量、minxins、编译未来的 CSS 语法、内联图片等。

### 4. [Shadow DOM](http://www.w3.org/TR/shadow-dom/)

在 Web Component 中封装 CSS、JavaScript、templating。

### 5. BEM - Block Element Modifier

(2012)

Block: 独立的实体，它本身是有意义的。`header，container，menu，checkbox，input`
Element: 块的一部分，没有独立的含义，在语义上与块相关联。`menu item，list item，checkbox caption，header title`
Modifier: 块或元素上的标志。使用它们来改变外观或行为。`disabled，highlighted，checked，fixed，size big，color yellow`

```
/* .block__element--modifier */

.block{}
.block__element{}
.block--modifier{}
.block__element--modifier{}
```

```
/* 减少层叠样式 */
/* Bad */
.block .element{}        /* nesting */
.element.modifier{}     /* chained */

/* Good */
.block__element{}
.element--modifier{}
```

```
/* 预处理器的支持 */
.block{
    &__element{
        &--modifier{ color: red; }
    }
    &--modifier{ color: blue; }
}

// Generates
.block__element--modifier{ color: red; }
.block--modifier{ color: blue; }
```

优点：
1. 模块化: 块样式从不依赖于页面上的其他元素，所以你将永远不会遇到级联的问题。
2. 可重用性: 以不同方式组合独立块，并智能地重用它们，可以减少必须维护的CSS代码量。
3. 结构体: BEM方法为您的CSS代码提供了一个简单易懂的坚实结构。


### 6. SUIT CSS - Style For Component
结构化类名和有意义的连字符。

### 7. [ATOMIC CSS](http://acss.io) - Better Inline Styling

将样式分解为原子或不可分割的部分

(Thierry 2013)

```
// the plain way
<div class="fwb tar bd1"></div>
<div class="m-5 mt-10"></div>

// atomizer
<div class="Bgc(#0280ae.5) H(90px) IbBox W(50%) foo_W(100%)"></div>
<div class="Bgc(#0280ae) H(90px) IbBox W(50%) foo_W(100%)"></div>
```

### 8. CSS In JS

- Radium
- React Style
- JSX Style

### 9. [CSS Module](http://glenmaddern.com/articles/css-modules)

- local scope: `:local(.header) { ... }`
- class mapping: `{'header': '_1rJwx92-gmbvaLiDdzgXiJ'}`

#### 9.1 local is default

```
// Before CSS Modules
/* components/submit-button.css */
.Button { /* all styles for Normal */ }
.Button--disabled { /* overrides for Disabled */ }
.Button--error { /* overrides for Error */ }
.Button--in-progress { /* overrides for In Progress */
```

```
// With CSS Modules
/* components/submit-button.css */
.normal { /* all styles for Normal */ }
.disabled { /* all styles for Disabled */ }
.error { /* all styles for Error */ }
.inProgress { /* all styles for In Progress */
```

```
/* components/submit-button.js */
import styles from './submit-button.css';

buttonElem.outerHTML = `
  <button class=${styles.normal}>Submit</button>

// generate, HASHED classname
<button class="components_submit_button__normal__abc5436">
  Processing...
</button>
```

#### 9.2 composition is everything

通过 composes 所有状态共享样式。

```
/* BEM Style */
innerHTML = `<button class="Button Button--in-progress">`

/* CSS Modules */
innerHTML = `<button class="${styles.inProgress}">`
```

```
.common {
  /* all the common styles you want */
}
.inProgress {
  composes: common;    /* similar to Sass @extend */
  /* anything that only applies to In Progress */
}
```

#### 9.3 Sharing Between Files

```
/* colors.css */
.primary {
  color: #720;
}
.secondary {
  color: #777;
}
/* other helper classes... */
```

```
/* submit-button.css */
.common { /* font-sizes, padding, border-radius */ }
.normal {
  composes: common;
  composes: primary from "../shared/colors.css";
}
```

#### 9.4 Single Responsibility Modules

```
.element {
  composes: large from "./typography.css";
  composes: dark-text from "./colors.css";
  composes: padding-all-medium from "./layout.css";
  composes: subtle-shadow from "./effect.css";
}
```

```
/* this short hand: */
.element {
  composes: padding-large margin-small from "./layout.css";
}

/* is equivalent to: */
.element {
  composes: padding-large from "./layout.css";
  composes: margin-small from "./layout.css";
}
```

### 10 Pages Override Components CSS

For component-based multi-entries SPA.

### 11. opinion

- 小、全栈的团队：CSS Modules/Inline CSS/Atomic CSS
- 大、传统的团队：BEM/SUIT/ECSS or make your own


* [CSS STILL SUCKS 2015](https://huangxuan.me/css-sucks-2015/#/)
