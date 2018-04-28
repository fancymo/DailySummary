### 1. 编程范式

常见的编程范式有 **命令式编程（Imperative programming）**、**函数式编程**、**逻辑式编程**，常见的面向对象编程语言有着命令式的风格，但增添了支持对象的功能。

### 2. 函数式编程

命令式编程是一种面向计算机硬件的抽象，有变量（对应着存储单元），赋值语句（获取、存储指令），表达式（内存饮用和算数运算）和控制语句（跳转指令），换句话说，命令式程序就是一个冯诺依曼机的指令序列。

函数式编程是面向数学的抽象，将计算描述为一种表达式求值。

函数式编程中的函数指的是数学中的函数，即自变量的映射。一个函数的值仅取决于函数参数的值，避免使用程序状态以及易变对象。

函数式语言中，函数作为一等公民，可以在任何地方定义，在函数内或函数外，可以作为函数的参数和返回值，可以对函数进行组合。

#### 2.1 组合子逻辑

Haskell Books Curry 和 Moses Schönfinkel 的一种符号系统，用来消除数理逻辑中对变量的需要。

#### 2.2 一等公民的函数

当函数作为一等公民当时候，可以像对待任何其他数据类型一样对待它们——把它们存在数组里，当作参数传递，赋值给变量...等等。

#### 2.3 高阶函数

高阶函数允许传递数据和函数的参数，逻辑可以作为函数形式的参数传递。某种程度上减少程序员拷贝粘贴逻辑代码。

#### 2.4 纯函数

纯函数是这样一种函数，即相同的输入，永远会得到相同的输出，而且没有任何可观察的副作用。

```
// 不纯的
var minimum = 21;

var checkAge = function(age) {
  return age >= minimum;
};


// 纯的
var checkAge = function(age) {
  var minimum = 21;
  return age >= minimum;
};
```

在不纯的版本中，它取决于系统状态（system state）；这一点令人沮丧，因为它引入了外部的环境，从而增加了认知负荷（cognitive load）。

让副作用在可控的范围内发生。

#### 2.4 柯里化（Curry）

柯里化，又称部分求值，是把接受多个参数的函数变换成接受一个单一参数的函数，并返回接受余下的参数而且返回结果的新函数的技术。**使函数理解并处理部分应用。**

这允许我们编写其功能的通用版本，然后添加一些参数来创建更专业的版本。

柯里化有三个常见的作用：
1. 参数复用；
2. 提前返回；
3. 延迟计算/运行。

栗子1: 参数复用
```
var foo = function(a) {
  const square = a * a;
  return function(b) {
    return square + b * b;
  }
}
const squareTwoBase = foo(2);
squareTwoBase(1) // => 5
squareTwoBase(2) // => 5
```

栗子2: 提前返回

兼容现代浏览器以及IE浏览器的事件添加方法。正常情况可能会这样写：
```
var addEvent = function(el, type, fn, capture) {
    if (window.addEventListener) {
        el.addEventListener(type, function(e) {
            fn.call(el, e);
        }, capture);
    } else if (window.attachEvent) {
        el.attachEvent("on" + type, function(e) {
            fn.call(el, e);
        });
    }
};
```

很显然，我们每次使用addEvent为元素添加事件的时候，(eg. IE6/IE7)都会走一遍if...else if ...，其实只要一次判定就可以了，可以改为下面这样子的代码：

```
var addEvent = (function(){
    if (window.addEventListener) {
        return function(el, sType, fn, capture) {
            el.addEventListener(sType, function(e) {
                fn.call(el, e);
            }, (capture));
        };
    } else if (window.attachEvent) {
        return function(el, sType, fn, capture) {
            el.attachEvent("on" + sType, function(e) {
                fn.call(el, e);
            });
        };
    }
})();
```

栗子3: 延迟计算

```
var money = 0;
var pay = function(oneLobster) {
    money+=oneLobster;
}
pay(38);
pay(38);

console.log(money); // => 76
```

ES5 中 bind 方法，用来改变 Function 执行时候的上下文，本质上就是延迟执行。

antd Form 的欣赏:

```
// ant-design/blob/master/components/form/Form.tsx
static create = function<TOwnProps>(options: FormCreateOption<TOwnProps> = {}): ComponentDecorator<TOwnProps> {
  return createDOMForm({
    fieldNameProp: 'id',
    ...options,
    fieldMetaProp: FIELD_META_PROP,
    fieldDataProp: FIELD_DATA_PROP,
  });
};

// react-component/form/blob/master/src/createDOMForm.js
// createDOMForm enhancement, support props.form.validateFieldsAndScroll
function createDOMForm(option) {
  return createBaseForm({
    ...option,
  }, [mixin]);
}

// react-component/form/blob/master/src/createBaseForm.js
function createBaseForm(option = {}, mixins = []) {
  const { ... } = option;

  return function decorate(WrappedComponent) {
    const Form = createReactClass({
      mixins,
      ...
      render() {
        const { wrappedComponentRef, ...restProps } = this.props;
        const formProps = {
          [formPropName]: this.getForm(),
        };
        ...
        const props = mapProps.call(this, {
          ...formProps,
          ...restProps,
        });
        return <WrappedComponent {...props}/>;
      }
    }
  }
}
```

这里达到的是一种 **单一职责** 的能力。在不同的模块做不同的事情。

```
// react-component/form/blob/master/src/createForm.js
function createForm(options) {
  return createBaseForm(options, [mixin]);
}
```

这里达到的是一种 **复用** 的能力。

> 参数顺序对于充分利用柯里里来说非常重要。

#### 2.5 反柯里化

与科里化相反，反科里化的作用在于扩大函数的使用性,使本来作为特定对象所拥有的功能函数可以被任意对象所用。

```
//就是用来泛化方法的this,并传参
Function.prototype.uncurrying = function() {
  var that = this;
  return function() {
    Function.prototype.call.apply(that, arguments);
  }
}

//示例
var obj = {};
var push = Array.prototype.push.uncurrying();
push(obj, '1232')
console.log(obj) // => { '0': '1232', length: 1 }
```

### 3 总结

各类编程范式本质上并没有优劣之分，命令式语言更适合批处理脚本的编写，面向对象语言更适合GUI界面的处理，函数式语言则更适合大量数据的并行处理。


【参考文献】：

* [javascript 中有趣的反柯里化技术](http://www.alloyteam.com/2013/08/javascript-zhong-you-qu-di-fan-ke-li-hua-ji-shu/)
* [So You Want to be a Functional Programmer](https://medium.com/@cscalfani)
