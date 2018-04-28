// 在传统的前端解耦方面，观察者模式作为比较常见一种设计模式。
// 观察者模式也叫 发布者-订阅者模式，发布者发布事件，订阅者监听事件并做出反应。
//
const eventProxy = {
  onObj: {},
  oneObj: {},
  on: function(key, fn) {
    if(this.onObj[key] === undefined) {
      this.onObj[key] = [];
    }

    this.onObj[key].push(fn);
  },
  one: function(key, fn) {
    if(this.oneObj[key] === undefined) {
      this.oneObj[key] = [];
    }

    this.oneObj[key].push(fn);
  },
  off: function(key) {
    this.onObj[key] = [];
    this.oneObj[key] = [];
  },
  trigger: function() {
    let key, args;
    if(arguments.length == 0) {
      return false;
    }
    key = arguments[0];
    args = [].concat(Array.prototype.slice.call(arguments, 1));

    if(this.onObj[key] !== undefined
      && this.onObj[key].length > 0) {
      for(let i in this.onObj[key]) {
        this.onObj[key][i].apply(null, args);
      }
    }
    if(this.oneObj[key] !== undefined
      && this.oneObj[key].length > 0) {
      for(let i in this.oneObj[key]) {
        this.oneObj[key][i].apply(null, args);
        this.oneObj[key][i] = undefined;
      }
      this.oneObj[key] = [];
    }
  }
};

export default eventProxy;
