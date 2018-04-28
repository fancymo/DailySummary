使用原型模式可以带来性能的提升：在一个对象中定义一个函数，他们是由引用创建，而不是创建自己的单份拷贝。
```
// 实现一
Object.create(prototype, optionalDescriptorObjects)

var myCar = { name: 'Ford' };

var yourCar = Object.create(myCar);

// => yourCar.__proto__ === myCar
```

```
// 实现二
var vehiclePrototype = {
  init: function (carModel) {
    this.model = carModel;
  },
  getModel: function () {
    return this.model;
  }
};
function vehicle(model) {
  function F() {}
  F.prototype = vehiclePrototype;
  var f = new F();
  f.init(model);
  return f;
}
var car = vehicle('Ford');
car.getModel();
```

```
// 实现三
var beget = (function () {
  function F() {}
  return function (proto) {
    F.prototype = proto;
    return new F();
  };
})();
```
