### input 设置 readonly 存在有光标

- focus 时调用 `blur()`，键盘唤起与隐藏存在闪动问题
- 蒙层遮罩，不触发 input 的 focus 事件

### 聚焦不同 input 时，类型不同的键盘不能自动切换，部分键盘存在，如百度键盘

- 模拟实现 input 和 键盘

### 通过 flex 实现的高度，子元素设置为 height: 100% 将失效
设置父元素高度为非 auto

### 键盘唤起挡住输入框
- Element.scrollIntoView
- 获取输入框的位置，Window.scrollTo(x, y)

### 固定底部实现

- position: fixed: Android 和 iOS 表现不一致
- display:flex: 需要父元素拥有高度，部分浏览器如 Safari 上 height: 100% 渲染有问题
- vh: 通过 viewport units 设置元素对高度
ps: 该实现在 UC 上有bug， 详细步骤:
1. 第一个键盘弹出界面点击跳转至下一页；键盘收起，跳转至下一个界面
2. 第二个界面闪屏后 overflow: auto 元素消失，尝试设置 box-sizing: content-box; padding|margin 时布局正常；

### react V16.0.0+ 在 QQ 浏览器上渲染有问题

### viewport units

* [viewport-units-buggyfill](https://github.com/rodneyrehm/viewport-units-buggyfill)

- 在 Mobile Safari 上，解决 viewport units (vh|vw|vmin|vmax) 错误行为
- 在 Mobile Safari and IE9+ (hack)，覆盖 calc() 表达式
- vmin, vmax in IE9+ (hack)
- viewport units 在旧的 Android 内置浏览器问题
