### refs

React 典型的数据流，父组件与子组件之间通过 props 互相影响。通过传入新的 props 重新渲染子组件。
React 通过 refs 命令式修改子组件。

使用 refs 的场景：
- 管理 foucs、text selection、media playback
- 触发动画
- 集成三方 DOM 库

ref 属性可以被添加到 Component 和 DOM Element 上，ref 接受一个回调，这个回调函数在组件 mounted 或者 unmounted 之后立即调用。

#### 1.1 HTML Element
当 ref 属性被添加到 HTML Element 上，当组件 mounts，ref 的回调函数接受一个 DOM Element 作为它的参数，当组件 unmounts，ref 的回调函数接受一个 null 作为它的参数。

使用 ref 回调设置为 class 的属性是获取 DOM elements 的一种模式。

#### 1.2 Class Component
如果属性 ref 被用在 class 声明的自定义组件上，ref 的回调将接受该组件 mounted 的实例作为它的参数。

#### 1.3 Functional Components
functional components 没有 render 实例。如果有必要，可以将 component 转换成一个 class。

#### 1.4 暴露 DOM refs 给父组件
这是不建议的。

#### 1.5 ref with string
使用字符串传递给 ref 有如下几个缺点：
- 它要求 React 保持当前渲染组件的轨迹，这让 React 有点慢
- It doesn't work as most people would expect with the "render callback" pattern (e.g. <DataGrid renderRow={this.renderRow} />) because the ref would get placed on DataGrid for the above reason.？？
- 不可组合

注意: 如果 ref 定义为 inline function，在更新时它将被调用两次，第一次为 null，这是因为在每次渲染时新的实例将被创建，React 需要清除旧的并设置新的。

### Uncontrolled Components

React 推荐使用 Controlled Components 实现表单。

使用 Controlled Components 表单数据是由 React Component 处理。Uncontrolled Components 是由 DOM 自己处理。

Controlled Components 使得表单元素能够在 input 改变的时候即时响应，举个栗子：

- in-place 反馈，如验证
- 禁用按钮，除非所有的元素有有效的数据输入
- 强制特殊的表单格式，如银行卡号

评估场景选择正确的方式：
|-- feature --|-- uncontrolled --|-- controlled --|
| 一次值的检索 | true | true |
| 提交时验证 | true | true |
| 即时验证 | fasle | true |
| 根据条件禁用按钮 | fasle | true |
| 强制特殊输入格式 | fasle | true |
| 一份数据多处输入 | fasle | true |
| 动态输入 | fasle | true |

* [Controlled and uncontrolled form inputs in React don't have to be complicated](https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/)

### Reconciliation

React 实现启发式 O(n) 算法基于两个设想：
- 两个 element 拥有不同的 type 将产生两个不同的树
- 开发者可以通过 key 暗示哪些子元素在不同的 render 里是稳定的

#### Diff 算法

当 diff 两棵树，React 先对比两个根元素，根据对比根元素的类型采取不同的行为。

##### Elements 拥有不同的 type

elements 拥有不同的 type，React 将拆除旧树重头构建新树。当拆除旧树，旧的 DOM 节点将被销毁。Component 的实例将接收 `componentWillUnmount()`，当创建新的树，新的 DOM 节点被插入到 DOM，组件将依次接收到 `componentWillMount()`、`componentDidMount()`。旧树的 state 丢失。

##### DOM Elements 拥有相同的 type

React 保持相同的底层 DOM 节点，只更新改变的属性。

##### Component Elements 拥有相同的 Type

当组件更新，实例保持不变，因此 state 将被维持。React 更新 Component 实例的 props 匹配新的元素，在实例上调用`componentWillReceiveProps()`、`componentWillUpdate()`。

接下来调用 `render()`，diff 算法递归比较之前的结果和新的结果。

##### 递归 Children

默认情况下，在 DOM 节点的子节点上递归时，只需同时迭代两个子节点列表，并在有差异时生成一个变异。

如果您天真地实现它，在开头插入一个元素，会使每一个 child 都发生变异，性能会更差。

##### key

为了解决这个问题，React 支持属性 key。当 child 有 key 时，React 使用 key 来匹配原始树中的 child 和后续树中的child。

key 只需要在兄弟姐妹中是唯一的，而不是全球唯一的。

当使用索引作为键时，重新排序还会导致组件状态问题。组件实例根据其密钥进行更新和重用。如果键是索引，则移动项将更改它。

##### 折衷

重要的是，调度算法是一个实现细节。React 可以在每个动作上重新呈现整个应用程序；最终结果将是相同的。为了清楚起见，重新渲染在这个上下文中意味着调用所有组件的 `render()`，但这并不意味着 React 将卸载和重新装载它们。它只会按照前面几节中所述的规则应用差异。

该算法不会尝试匹配不同组件类型的子树。
key 应该是稳定的、可预测的和唯一的。不稳定的键(如Math.Rand()生成的键)会不必要地重新创建许多组件实例和DOM节点，这会导致子组件的性能下降和状态丢失。

### 生命周期

React 的主要思想是构建可复用组件来构建用户界面。所谓组件，就是有限状态机（FSM）。

有限状态机，表示有限个状态以及在这些状态之间的转移和动作等行为的模型。一般通过状态、事件、转换和动作来描述有限状态机。
