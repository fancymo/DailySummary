// 基类
function Man() {
  this.def = 2;
  this.atk = 3;
  this.hp = 3;
}

Man.prototype = {
  toString: function () {
    return `防御力:${this.def},攻击力:${this.atk},血量:${this.hp}`;
  }
}

// 创建装饰器，接收 Man 对象作为参数。每个装饰者都会继承它
const Decorator = function (man) {
  this.man = man;
}

Decorator.prototype.toString = function () {
  return this.man.toString();
}

// 继承自装饰器对象
const DecorateArmour = function (man) {
  const moreDef = 100;
  man.def += moreDef;
  // 调用父类构造函数的方式
  Decorator.call(this, man);
}
DecorateArmour.prototype = new Decorator();

DecorateArmour.prototype.toString = function () {
  return this.man.toString();
}

const ManFactory = {
    // 用只一个方法就能制造一辆可任意组合功能的汽车
  makeMan: function (features) {
    let man = new Man();
    // 创建一个所有功能的列表，都设置成0，表示它还没有被添加
    const featureList = {
      armour: 0
    };

    // 如果指定了功能就把功能加到car上
    if (features && features.length) {
      let i = 0;
      const l = features.length;

      // 遍历所有的功能并添加到car上
      for (; i < l; i ++) {
        const feature = features[i];

        // 按一定的顺序添加功能了
        if (featureList.powerwindows) {
          man = new DecorateArmour(man);
        }
      }
    }

    return man;
  }
}

// 调用工厂方法，传一个字符串列表进去
// 这些字符串标识了你想让这辆车拥有的功能
const man = ManFactory.makeMan(['armour']);

// 如果你只想一辆普通的老款车，那就什么参数都不用传
// const man = ManFactory.makeMan();
