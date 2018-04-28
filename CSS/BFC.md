* [CSS之BFC详解](http://www.html-js.com/article/1866)

触发条件：
1. 根元素或其它包含它的元素
2. 浮动元素: float 除 none 以外的值
3. 绝对定位元素 (元素具有 position 为 absolute 或 fixed)
4. 内联块 (元素具有 display: inline-block)
5. 表格单元格 (元素具有 display: table-cell，HTML表格单元格默认属性)
6. 表格标题 (元素具有 display: table-caption, HTML表格标题默认属性)
7. 具有overflow 且值不是 visible 的块元素
8. display: flow-root
9. column-span: all 应当总是会创建一个新的格式化上下文

特性：
1. 元素的左外边距会触碰到包含块容器(BFC)的左外边框
2. BFC 不会与浮动盒子叠加 -- 实现两栏布局
3. BFC 高度的计算，浮动元素也会参与 -- 清除浮动

* [margin collapsing 的问题](http://www.html-js.com/topic/473)
* [OVERFLOW – A SECRET BENEFIT](http://www.stubbornella.org/content/2009/07/23/overflow-a-secret-benefit/)
