// es7 Decorator
// 纯粹的装饰者模式
function decorateArmour(target, key, descriptor) {
  // 将原有方法提取出来，保障原有方法的纯净
  const method = descriptor.value;
  const moreDef = 100;
  let ret;
  descriptor.value = (...args) => {
    // 增加属性值
    args[0] += moreDef;
    ret = method.apply(target, args);
    // 原始的调用结果
    return ret;
  }
  return descriptor;
}

// 半透明的装饰模式
// 增加飞行能力
function addFly(canFly) {
  return function (target) {
    target.canFly = canFly;
    const extra = canFly ? '(技能加成:飞行能力)' : '';
    const method = target.prototype.toString;
    target.prototype.toString = (...args) => {
      return method.apply(target.prototype, args) + extra;
    }
    return target;
  }
}

@addFly(true)
class Man {
  constructor(def = 2, atk = 3, hp = 3) {
    this.init(def, atk, hp);
  }

  @decorateArmour
  init(def, atk, hp) {
    this.def = def; // 防御值
    this.atk = atk;  // 攻击力
    this.hp = hp;  // 血量
  }

  toString() {
    return `防御力:${this.def},攻击力:${this.atk},血量:${this.hp}`;
  }
}

export default Man;
