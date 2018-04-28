### HTML书写规范

#### 2.1 语法
用四个空格来代替制表符（tab），优化代码格式。 
嵌套元素应当缩进一次（即4个空格）。 
对于属性的定义，确保全部使用双引号，绝不要使用单引号。 
不要在自闭和（self-closing）元素的尾部添加斜线 -- HTML5 规范中明确说明这是可选的。 
不要省略可选的结束标签（closing tag）（例如，</li> 或 </body>）。 

#### 2.2 HTML5  doctype 
为每个 HTML 页面的第一行添加标准模式（standard mode）的声明，这样能够确保在每个浏览器中拥有一致的展现。 
```
<!DOCTYPE html> 
```

#### 2.3语言属性 
根据 HTML5 规范：强烈建议为 html 根元素指定 lang 属性，从而为文档设置正确的语言。这将有助于语音合成工具确定其所应该采用的发音，有助于翻译工具确定其翻译时所应遵守的规则等等。 
```
<html lang="en-us"> 
  <!-- ... --> </html> 
```
中文使用zh，中文简体为zh-cn。 

#### 2.4 IE 兼容模式 
IE 支持通过特定的 <meta> 标签来确定绘制当前页面所应该采用的 IE 版本。除非有强烈的特殊需求，否则最好是设置为 edge mode，从而通知 IE 采用其所支持的最新的模式。 
```
<meta http-equiv="X-UA-Compatible" content="IE=Edge"> 
```

#### 2.5 字符编码 
通过明确声明字符编码，能够确保浏览器快速并容易的判断页面内容的渲染方式。这样做的好处是，可以避免在 HTML 中使用字符实体标记（character entity），从而全部与文档编码一致（一般采用 UTF-8 编码）。 
```
<head> <meta charset="UTF-8"> </head>
```

#### 2.6 引入 CSS 和 JavaScript 文件 
根据 HTML5 规范，在引入 CSS 和 JavaScript 文件时一般不需要指定 type属性，因为 `text/css` 和 `text/javascript` 分别是它们的默认值。 

#### 2.7 属性顺序 
HTML 属性应当按照以下给出的顺序依次排列，确保代码的易读性。

``` 
class 
id, name 
data-* 
src, for, type, href 
title, alt 
aria-*, role 
```

class 用于标识高度可复用组件，因此应该排在首位。id 用于标识具体组件，应当谨慎使用（例如，页面内的书签），因此排在第二位。

``` 
<a class="..." id="..." data-modal="toggle" href="#"> 
  Example link 
</a> 
<input class="form-control" type="text"> <img src="..." alt="..."> 
```

#### 2.8 布尔（boolean）型属性 
布尔型属性可以在声明时不赋值。
```
 <input type="text" disabled>
<input type="checkbox" value="1" checked> 
<select> 
  <option value="1" selected>1</option>
 </select> 
```
#### 2.9 减少标签的数量 
编写 HTML 代码时，尽量避免多余的父元素。很多时候，这需要迭代和重构来实现。
``` 
<!-- Not so great --> 
<span class="avatar">   <img src="..."> </span>  
<!-- Better --> 
<img class="avatar" src="..."> 
```
JavaScript 生成的标签 
通过 JavaScript 生成的标签让内容变得不易查找、编辑，并且降低性能。能避免时尽量避免。

#### 2.10 其他要求 
css 文件外链至 `<head></head>` 之间，js文件置于 `</body>` 之前。

语义化 HTML，如标题根据重要性用 h*(同一页面只能有一个 h1 )，段落标记用 p，列表用 ul，内联元素中避免嵌套块级元素。 

书写链接地址时，建议在URL地址后面加上"/"，例如：	`href="http://proin.cc/"`。

在页面中不能使用style属性，即style="…"；所有样式必须写在css文件中。

必须为含有描述性表单元素(input，textarea)添加label，如： 
```
<p>姓名:<input type="text" id="name" name="name" /></p>
```
须写成：
```
 <p><label for="name">姓名：</label><input type="text" id="name" /></p>
```

能以背景形式呈现的图片，尽量写入css样式中。

给重要的元素和截断的元素加上title。 

建议给区块代码及重要功能（比如循环）加上注释，方便后面添加功能。 

不是标签一部分的特殊符号都用编码表示，出现在内容中的特殊符号都需要用编码形式表现出来，如：`<：&lt`，`>：&gt`，`&：&amp`，`"：&quot`;，尽量使用 `&nbsp;` 代替空格。 

图片标签必须要有alt属性，如只起修饰作用而没有任何意义的图片可设置alt属性值为空。如：
```
<img src="a.gif" alt="">
```
