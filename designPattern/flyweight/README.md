FlyWeight(享元) 模式用于优化重复、缓慢及数据共享效率低低代码。旨在通过与相关的对象共享尽可能多的数据来减少应用程序内的使用（如程序配置、状态等）。

FlyWeight 应用方式有两种。一种用于数据层，处理内存中保存的大量相似对象的共享数据。
第二种用于 DOM 层，可以用作中央事件管理器，避免将事件处理程序附加到父容器中的每个子元素上。

```
// 使一个函数显式地继承一个接口，可以用它来为缺少的 implements 关键字打上补丁。
Function.prototype.implementsFor = function (parentClassOrObject) {
  if (parentClassOrObject.constructor === Function) {
    this.prototype = new parentClassOrObject();
    this.prototype.constructor = this;
    this.prototype.parent = parentClassOrObject.prototype;
  } else {
    this.prototype = parentClassOrObject;
    this.prototype.constructor = this;
    this.prototype.parent = parentClassOrObject;
  }
  return this;
}

// 享元对象: 描述一个接口，通过这个接口 flyweight 可以接受并作用于外部状态。
var coffeeOrder = {
  serveCoffe: function (context) {},
  getFlavor: function () {},
};

// 具体享元: 实现享元接口，并存储内部状态。对象必须是可共享的，并能够控制外部状态。
// CoffeeFlavor 实现了 CoffeeOrder 接口，且必须包含它的接口方法，以便将功能的实现赋值给对象。
function CoffeeFlavor(newFlavor) {
  var flavor = newFlavor;
  if (typeof this.getFlavor === 'function') {
    this.getFlavor = function () {
      return flavor;
    }
  }
  if (typeof this.serveCoffe === 'function') {
    this.serveCoffe = function (context) {
      // ...
    }
  }
}
// 为 CoffeeOrder 实现接口
CoffeeFlavor.implementsFor(CoffeeOrder);

// 处理 coffee 订单的 table 数
function

// 享元工厂: 创建并管理 FlyWeight 对象。确保合理地共享 FlyWeight，并将它们当作一组对象进行管理，并且如果我们需要单个实例时，可以查询这些对象。如果该对象已经存在则直接返回，否则，创建新对象并返回。

```
