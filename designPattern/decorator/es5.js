// es5 实现
//
// Man 是具体的类，Decorator 是针对 Man 的装饰器基类
// 具体的装饰类 DecorateArmour 典型地使用 prototype 继承方式 继承自 Decorator 基类
// 基于 IOC（控制反转）思想 ，Decorator 是接受 Man 类，而不是自己创建 Man 类；

// 创建一个基类
function Man() {
  this.def = 2;
  this.atk = 3;
  this.hp = 3;
}

// 装饰者也需要实现这些方法，遵守 Man 的接口
Man.prototype = {
  toString: function () {
    return `防御力:${this.def},攻击力:${this.atk},血量:${this.hp}`;
  }
}

// 创建装饰器，接收 Man 对象作为参数。每个装饰者都会继承它
const Decorator = function (man) {
  this.man = man;
}

// 装饰者要实现这些相同的方法，简单包装同名方法
Decorator.prototype.toString = function () {
  return this.man.toString();
}

// 继承自装饰器对象
// 为每一个功能创建一个装饰者对象，重写父级方法，添加想要的功能。也是接收 Man 作对参数
const DecorateArmour = function (man) {
  const moreDef = 100;
  man.def += moreDef;
  // 调用父类构造函数的方式
  Decorator.call(this, man);
  // return man; ?
}
DecorateArmour.prototype = new Decorator();

// 接下来我们要为每一个功能创建一个装饰者对象，重写父级方法，添加我们想要的功能。
DecorateArmour.prototype.toString = function () {
  return this.man.toString();
}

// 注意这里的调用方式
// 构造器相当于“过滤器”，面向切面的
let tony = new Man();
console.log(tony);
// 输出：当前状态 ===> 防御力:2,攻击力:3,血量:3
tony = new DecorateArmour(tony);
console.log(tony);
console.log(`当前状态 ===> ${tony}`);
// 输出：当前状态 ===> 防御力:102,攻击力:3,血量:3
