### CSS书写规范 
#### 3.1 语法 
使用两个空格的 soft tabs — 这是保证代码在各种环境下显示一致的唯一式。

使用组合选择器时，保持每个独立的选择器占用一行。

为了代码的易读性，在每个声明的左括号前增加一个空格。

声明块的右括号应该另起一行。 

每条声明 : 后应该插入一个空格。 

每条声明应该只占用一行来保证错误报告更加准确。
 
所有声明应该以分号结尾。虽然最后一条声明后的分号是可选的，但是如果没有他，你的代码会更容易出错。 

逗号分隔的取值，都应该在逗号之后增加一个空格。 

不要在颜色值 rgb() 和 rgba() 中增加空格，并且不要带有取值前面不必要的 0 (比如，使用 .5 替代 0.5)。 

所有的十六进制值都应该使用小写字母，例如 #fff。因为小写字母有更多样的外形，在浏览文档时，他们能够更轻松的被区分开来。 

尽可能使用短的十六进制数值，例如使用 #fff 替代#ffffff。 

为选择器中得属性取值添加引号，例如input[type="text"]。 他们只在某些情况下可有可无，所以都使用引号可以增加一致性。 

不要为 0 指明单位，比如使用 margin: 0; 而不是 margin: 0px;。

对这里提到的规则可参考 Wikipedia 中的 CSS 语法部分。 
```
/* Bad CSS */ 
.selector, .selector-secondary, .selector[type=text] {   
padding:15px; 
   margin:0px 0px 15px; 
   background-color:rgba(0, 0, 0, 0.5); 
   box-shadow:0 1px 2px #CCC,inset 0 1px 0 #FFFFFF
}  
/* Good CSS */ .selector, 
.selector-secondary, 
.selector[type="text"] {   
  padding: 15px;   
  margin: 0 0 15px; 
  background-color: rgba(0,0,0,.5); 
  box-shadow: 0 1px 2px #ccc, inset 0 1px 0 #fff;
} 
```
#### 3.2 声明顺序 
相关的属性声明应该以下面的顺序分组处理：
```
Positioning 定位
Box model 盒模型
Typographic 排版
Visual 外观 
```
Positioning 处在第一位，因为他可以使一个元素脱离正常文本流，并且覆盖盒模型相关的样式。盒模型紧跟其后，因为他决定了一个组件的大小和位置。 
其他属性只在组件 内部 起作用或者不会对前面两种情况的结果产生影响，所以他们排在后面。 
#### 3.3 媒体查询位置 
尽量将媒体查询的位置靠近他们相关的规则。不要将他们一起放到一个独立的样式文件中，或者丢在文档的最底部。这样做只会让大家以后更容易忘记他们。这里是一个典型的案例。 

```
.element { ... } 
.element-avatar { ... } .element-selected { ... }  
@media (min-width: 480px) {   .element { ...} 
.element-avatar { ... }   .element-selected { ... } } 
```

#### 3.4 不要使用 `@import`
与 `<link>` 相比, `@import` 更慢，需要额外的页面请求，并且可能引发其他的意想不到的问题。应该避免使用他们，选择其他的方案： 
使用多个 `<link>` 元素 
使用 CSS 预处理器例如 Sass 或 Less 将样式编译到一个文件中 
使用 Rails, Jekyll, 或者其他环境提供的功能，来合并你的 CSS 文件。

```
<!-- Use link elements --> 
<link rel="stylesheet" href="core.css">  
<!-- Avoid @imports --> <style> 
@import url("more.css"); </style> 
```

#### 3.5 前缀属性 
当使用特定厂商的带有前缀的属性时，通过缩进使取值垂直对齐以便多行编辑。 在 Sublime Text 2 中， 使用 Selection → Add Previous Line (⌃⇧↑) 和Selection → Add Next Line (⌃⇧↓)。 
```
/* Prefixed properties */
 .selector { 
   -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.15);             
   box-shadow: 0 1px 2px rgba(0,0,0,.15); 
} 
```

#### 3.6 单条声明的声明块 

在一个声明块中只包含一条声明的情况下，为了易读性和快速编辑可以考虑移除其中的换行。所有包含多条声明的声明块应该分为多行。 

这样做的关键因素是错误检测 - 例如，一个 CSS 验证程序显示你在 183 行有一个语法错误,如果是一个单条声明的行，那就是他了。在多个声明的情况下，你必须为哪里出错了费下脑子。 
```
/* Single declarations on one line */ 
.span1 { width: 60px; } 
.span2 { width: 140px; } 
.span3 { width: 220px; }  
/* Multiple declarations, one per line */ 
.sprite { 
  display: inline-block;   
width: 16px;  
 height: 15px; 
 background-image: url(../img/sprite.png); } 
.icon           { background-position: 0 0; } 
.icon-home      { background-position: 0 -20px; } 
.icon-account   { background-position: 0 -40px; } 
```

#### 3.7 属性简写

坚持限制属性取值简写的使用，属性简写需要你必须显式设置所有取值。常见的属性简写滥用包括:  padding、 margin、 font、 background、 border、 border-radius。

大多数情况下，我们并不需要设置属性简写中包含的所有值。例如，HTML 头部只设置上下的 margin，所以如果需要，只设置这两个值。过度使用属性简写往往会导致更混乱的代码，其中包含不必要的重写和意想不到的副作用。 
```
/* Bad example */
.element { 
  margin: 0 0 10px;   
  background: red; 
  background: url("image.jpg");  
  border-radius: 3px 3px 0 0;
}  
/* Good example */
 .element { 
  margin-bottom: 10px;  
  background-color: red; 
  background-image: url("image.jpg");   
  border-top-left-radius: 3px;  
  border-top-right-radius: 3px; 
} 
```

#### 3.8 LESS 和 SASS 中的嵌套 
避免不必要的嵌套。可以进行嵌套，不意味着你应该这样做。只有在需要给父元素增加样式并且同时存在多个子元素时才需要考虑嵌套。

#### 3.9 代码注释 
代码是由人来编写和维护的。保证你的代码是描述性的，包含好的注释，并且容易被他人理解。好的代码注释传达上下文和目标。不要简单地重申组件或者 class 名称。

``` 
/* Bad example */ /* Modal header */ .modal-header { ... }  
/* Good example */ 
/* Wrapping element for .modal-title and .modal-close */ .modal-header { ... } 
```

#### 3.10 Class 和 Id 命名
class 名称中只能出现小写字符和破折号（-）（不是下划线，也不是驼峰命名法）。破折号应当用于相关 class 的命名（类似于命名空间）（例如，.btn 和 .btn-danger）。 

Id 名称中只能出现小写字符和下划线（underline）。 

避免过度任意的简写。.btn 代表 button，但是 .s 不能表达任何意思。名称应当尽可能短，并且意义明确。 

使用有意义的名称。使用有组织的或目的明确的名称，不要使用表现形式（presentational）的名称。 

基于最近的父 class 或基本（base） class 作为新 class 的前缀。

#### 3.11 选择器 
使用 classes 而不是通用元素标签来优化渲染性能。 

建议避免使用在经常出现的组件中使用一些属性选择器 (例如，[class^="..."])。

浏览器性能会受到这些情况的影响。 

减少选择器的长度，每个组合选择器选择器的条目应该尽量控制在 3 个以内。

只在必要的情况下使用后代选择器 (例如，没有使用带前缀 classes 的情况)。 
```
/* Bad example */ 
 .page-container #stream .stream-item .tweet .tweet-header .username { ... }

/* Good example */ 
.avatar { ... }
.tweet-header .username { ... }
.tweet .avatar { ... } 
```
