mixin 有助于介绍系统中的重复功能及增加函数的复用。

有些人认为将功能注入对象原型是一种很糟糕的想法，因为它会导致原型污染和函数起源方面的不确定性。

```
var mixin = {
  moveUp: () => {},
  moveDown: () => {}
};

function Car() {}

_.extend(Car.prototype, mixin);

var myCar = new Car();
myCar.moveUp();
```
