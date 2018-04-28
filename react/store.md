### Flux

#### 优势
Flux 强调的单向数据流在很大程度上让应用的逻辑变得更加清晰，渲染的视图组件也让关注分离的设计思想贯彻执行。

Flux 强调请求与改变数据一定要分发 action，统一由 dispatcher 分配。如果明确知道某个局部状态不会影响整个应用中的其他部分，也不需要初始化的时候进行赋值，出于简化实现的考虑，可以把这个状态保存在组件中。

#### 不足

Flux 的冗余代码太多。

* [Flux solutions compared by example](http://pixelhunter.me/post/110248593059/flux-solutions-compared-by-example)

### Redux （Reduce + Flux）

Redux 对 Flux 许多冗余对部分做了简化（dispatcher）,同时将 Elm 语言中函数式编程的思想融入其中。

Redux 是一个可预测的状态容器，摒弃了传统 MVC 的发布/订阅模式并通过 Redux 三大原则强化对状态的修改。

#### 三大原则

1. 单一数据源

单一数据源的好处在于整个应用的状态都保存在一个对象中，这样我们随时可以提取整个应用的状态进行持久化（整个应用的即时保存）。为服务端渲染提供了可能。

2. 状态只读

定义一个 reducer，根据当前触发的 action ，返回一份全新对状态，对当前应用对状态（state）进行迭代。

3. 状态修改均由纯函数完成

每个 reducer 都是纯函数。Flux 中在 actionCreator 中 调用 AppDispatcher.dispatch 方法触发 action，不仅有冗余的代码，直接修改了 store 中的数据，无法保存每次数据变化前后的状态。

#### API
```
createStore(reducers[, initialState])

// 根据 previousState 和 action 计算出新的 newState
reducer(previousState, action) => state
```

实际应用中， reducer 在处理 previousState 需要有一个特殊的非空判断。这种情况下返回一个定义好的 initialState。

createStore 方法创建的 store 是一个对象，本身包含4个方法。

- getState(): 获取 store 中当前的状态
- dispatch(action): 分发 action，并返回这个 action
- subscibe(listener): 注册监听者，在 store 发生变化时回调
- replaceReducer(nextReducer): 更新当前 store 里的 reducer

#### react-Redux

<Provider /> 接受一个 store 作为 props，是整个 Redux 应用的顶层组件，而 connect() 提供了在整个 React 应用的任意组件中获取 store 中数据的功能。

#### middleware

提供一个分类处理 action 的机会。

```
// curring
// next === store.dispatch
store => next => action => {
  next(action)
}
```

-易串联: curring 的 middleware 结构具有延迟执行的特性，通过不断 curring 形成的 middleware 可以累积参数，再配合 compose 的方式，形成 pipeline 处理数据流。

-共享 store: 在 applyMiddleware 执行的过程中，store 还是旧的，但是因为闭包的存在，applyMiddleware 完成后，所有 middleware 内部拿到的 store 是最新且相同的。

```
dispatch = compose(...middlewares)(dispatch)

// ==> 

dispatch = mid1(mid2(mid3(dispatch)))

dispatch(action)
```

