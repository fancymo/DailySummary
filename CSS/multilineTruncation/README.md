<!-- ---
title: 文本截断
date: 2017-02-23 17:25:49
tags:
--- -->

## 文本多行截断

特殊场景下，移动端为更好的展示全局内容，会选择将部分内容信息隐藏，就让偶瞅瞅有哪些解决方案～

### text-overflow 单行截断

```
text-overflow: [ clip | ellipsis | <string> ]{1,2};
```

```
.block-with-text() {
  display: block;
  text-overflow: ellipsis;

  /* 这些都是文字截断所需哦 */
  white-space: nowrap;
  overflow: hidden;
}
```
这一样式对于 `inline element` 是无效滴，各位亲自行领会。

我认为最好的学习方法就是 **实践出真知**，此处就不贴出效果图，欲知效果，拿过去溜溜就晓得了。

### -webkit-line-clamp 属性

```
.block-with-text {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
}
```

### Hacker UI

细思极恐，人类的无限可能～

```
/* styles for '...' */
.block-with-text {
  overflow: hidden;
  position: relative;
  line-height: 1.2em;
  /* max-height = line-height (1.2) * lines max number (3) */
  max-height: 3.6em;
  /* fix problem when last visible word doesn't adjoin right side  */
  text-align: justify;  
  /* place for '...' */
  margin-right: -1em;
  padding-right: 1em;
}
/* create the ... */
.block-with-text:before {
  /* points in the end */
  content: '...';
  /* absolute position */
  position: absolute;
  /* set position to right bottom corner of block */
  right: 0;
  bottom: 0;
}
/* hide ... if we have text, which is less than or equal to max lines */
.block-with-text:after {
  /* points in the end */
  content: '';
  /* absolute position */
  position: absolute;
  /* set position to right bottom corner of text */
  right: 0;
  /* set width and height */
  width: 1em;
  height: 1em;
  margin-top: 0.2em;
  /* bg color = bg color under block */
  background: white;
}
```

此外 JS 也可以实现这类功能。

### 参考文献：

[Pure CSS for multiline truncation with ellipsis][multiline-truncation]

[multiline-truncation]: http://hackingui.com/front-end/a-pure-css-solution-for-multiline-text-truncation/
