## react 性能

* 1. 在 constructor 里调用 bind 或者 箭头函数，确保函数调用时 this 指针有正确的上下文。

[bind](../原理/bind.js) 通过创建新函数封装旧函数，jsx 每次渲染时都会创建一个新函数。

* 2. ref 属性使用回调函数代替字符串

* [Implement Better Refs API](https://github.com/facebook/react/issues/1373)

- 可以引用并被链式的传递。
- 异步处理
- 传入回调函数拥有更多的使用场景

* 3. 设置 prop 提前赋值成常量，不直接使用字面量

每次调用 React 组件都会重新创建组件，传入数组或者对象，引用的地址会发生改变。

* 4. immutable

* 5. Iterating over object properties is faster than iterating over arrays.

* 6. DOM 跨层级的移动操作，diff 会以移动的节点为根节点，重现创建整个树，因此在开发组件的时候，保持稳定的DOM结构有助于性能提升。

* 7. 在开发过程中尽量减少类似将最后一个节点移动到列表首部的操作。当节点数量过大或者更新操作频繁时，一定成程度上影响 React 性能。

* 8. PureComponent(SCU)
