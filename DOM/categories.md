##Kinds of content

HTML4 中简单的把元素分为 inline 和 block，实际开发中，因为页面表现的需要出现了 inline-block。基于这种考虑，在HTML5中，标准制定者重新定义了HTML元素的分类。

元素的内容模型：描述了元素期盼的内容。在 DOM 中，content 是一个元素的 children。

在 HTML 中，所有的标签元素按相似的特征被分为一个或多个分类组，如下：

- Metadata content
- Flow conent
- Sectioning conent
- Heading conent
- Phrasing conent
- Embedded conent
- Interactive conent

### Metadta content

用来设置其它内容表现或行为的内容，或者设置与其他文档关系，或者传达其他外带信息。

```
<base>,<link>,<meta>,<noscript>,<script>,<style>,<template>,<title>
```

元标签相关的如 RDF 也属于 Metadta content。

### Flow content

包含文本或植入内容。

```
 <a>,<abbr>,<address>,<area>（如果它是map元素的后代）<article>,<aside>,<audio>,<b>,<bdi>,<bdo>,<blockquote>,<br>,<button>,<canvas>,<cite>, <code>,<data>,<datalist>,<del>,<details>,<dfn>,<dialog>,<div>,<dl>,<em>,<embed>, <fieldset>,<figure>,<footer>,<form>,<h1>,<h2>,<h3>,<h4>,<h5>,<h6>,<header>,<hr>,<i>, <iframe>,<img>,<input>,<ins>,<kbd>,<label>,<link>（如果它在body中是允许的话）<main>,<map>, <mark>,MATHML<math>,<meter><nav>,<noscript>,<object>,<ol>,<output>,<p>,<picture>,<pre>,<progress>,<q>,<ruby>,<s>,<samp>,<script>,<section>,<select>,<small>,<span>,<strong>,<style>,<sub>,<sup>,SVG<svg>,<table>,<template>,<textarea>,<time>,<u>,<ul>,<var>,<video>,<wbr>,Text
```

### Sectioning content

定义headers、footers的范围。

```
<article>,<aside>,<nav>,<section>
```

### Heading content

定义了分节的标题。而这个分节可能由一个明确的分节内容元素直接标记，也可能由标题本身隐式地定义。

```
<h1>,<h2>,<h3>,<h4>,<h5>,<h6>
```

### Phrasing content

文档的文本，以及在段落标记内的文本元素，

```
 <a>,<abbr>,<area>(如果是 map 的子元素),<audio>,<b>,<bdi>,<bdo>,<br>,<button>,<canvas>,<cite>,<code>,<data>,<datalist>,<del>,<dfn>,<em>,<embed>,<i>,<iframe>,<img>,<input>,<ins>,<kbd>,<label>,<link>(如果在body内是允许的),<map>,<mark>,MathML<math>,<meter>,<noscript>,<object>,<output>,<picture>,< progress>,<q>,<ruby>,<s>,<samp>,<script>,<select>,<small>,<span>,<strong>,<sub>,<sup>,SVG<svg>,<template>,<textarea>,<time>,<u>,<var>,<video>,<wbr>,text
```
大部分元素只能包含phrasing content被分为phrasing content，不是 flow content。

### Embedded content

将另一个资源到或者将来自另一种标记语言或命名空间的内容插入到文档内。

```
<audio>,<canvas>,<embed>,<iframe>,<img>,MathML<math>,<object>,<picture>,SVG<svg>,<video>
```

### Interactive content

专门用于用户交互。

```
<a>(如果href属性存在),<audio>(如果controls属性存在),<button>,<details>,<embed>,<iframe>,<img>(如果usemap属性存在),<input>(如果type属性不是Hidden状态),<label>,<select>,<textarea>,<video>(如果controls属性存在)
```

### Palpable content

content model 元素允许拥有至少一个任何 flow content 或者 phrasing content 且无 hidden 属性的节点称为 Palpable content。

### Script-supporting elements

用来支持脚本，他们不渲染。

```
<script>,<template>
```

### Transparent content models

一个 Transparent 元素的 content models 来源于它父元素的 content models。

一些情况下，Transparent element 互相嵌套。

当一个透明元素没有父节点，它的 content model 部分必须被视为可以被任何 flow content 接受。

> 当<template>元素被解析，单独的 DocumentFragment 分派为它的子节点，而不是它本身的 children。

## 参考文献

* [kinds-of-content](https://www.w3.org/TR/html/dom.html#kinds-of-content)
