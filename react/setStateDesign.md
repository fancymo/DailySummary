setState() 是异步的。

### 1. 保证内部的一致性

机制上推迟并批量处理 setState() 对于重渲染是有益而且对性能有优化，无论setState是同步还是异步。但是，子组件需要等父组件重新渲染后才知道 props。

现在的设计保证了 React 提供的 objects（state，props，refs）的行为和表现都是一致的。

可以考虑，假设 state 是同步更新的，那么下面的代码是可以按预期工作的：

```
console.log(this.state.value) // 0
this.setState({ value: this.state.value + 1 });
console.log(this.state.value) // 1
this.setState({ value: this.state.value + 1 });
console.log(this.state.value) // 2
```
然而，这时你需要将状态提升到父组件，以供多个兄弟组件共享：

```
-this.setState({ value: this.state.value + 1 });
+this.props.onIncrement(); // 在父组件中做同样的事
```

然而下面的代码却不能按预期工作：
```
console.log(this.props.value) // 0
this.props.onIncrement();
console.log(this.props.value) // 0
this.props.onIncrement();
console.log(this.props.value) // 0
```

这是因为同步模型中，虽然 this.state 会立即更新，但是 this.props 并不会。而且在没有重渲染父组件的情况下，我们不能立即更新 this.props。如果要立即更新 this.props （也就是立即重渲染父组件），就必须放弃批处理（根据情况的不同，性能可能会有显著的下降）。

### 2. 性能优化

React 会依据不同的调用源，给不同的 setState() 调用分配不同的优先级。调用源包括事件处理、网络请求、动画等。

假设你在一个聊天窗口，你正在输入消息，TextBox 组件中的 setState() 调用需要被立即应用。然而，在你输入过程中又收到了一条新消息。更好的处理方式或许是延迟渲染新的 MessageBubble 组件，从而让你的输入更加顺畅，而不是立即渲染新的 MessageBubble 组件阻塞线程，导致你输入抖动和延迟。

如果给某些更新分配低优先级，那么就可以把它们的渲染分拆为几个毫秒的块，用户也不会注意到。

### 3. 更多的可能性

假设从一个界面跳转到另一个界面，加载 loading 时间短引起界面的闪烁，用户体验不好，可以考虑依靠生命周期来优化。
