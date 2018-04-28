// JavaScript 没有访问修饰符，不能称变量为公用或者私有，需要使用函数作用域来模拟这个概念。
// Module 模式内，由于闭包的存在，声明的变量和方法只在该模式内部可用。
//
// 优点：
// 1. 模块享有私有函数的自由。
// 2. 函数往往已命名，找到抛出异常的函数变得容易。
// 3. 根据环境，返回不同的函数，UA 测试。(现在可以通过特征检测来实现)
//
// 缺点
// 1. 无法轻易扩展私有方法。
// 2. 无法访问之后在方法里添加私有成员。
var testModule = (function () {
  var counter = 0;
  return {
    incrementCounter: function () {
      return counter ++;
    },
    resetCounter: function () {
      counter = 0;
    }
  }
})();

testModule.incrementCounter();
