function Promise(executor) {
  const self = this;
  self.status = 'pending'; // 状态
  self.data = undefined; // 值
  self.onResolvedCallback = []; // resolve 时的回调函数集
  self.onRejectedCallback = [];
  function resolve(value) {
    if (self.status === 'pending') {
      self.status = 'resolved';
      self.data = value;
      for (let i = 0; i < self.onResolvedCallback.length; i += 1) {
        self.onResolvedCallback[i](value);
      }
    }
  }

  function reject(reason) {
    if (self.status === 'pending') {
      self.status = 'rejected';
      self.data = reason;
      // console.log(self.onRejectedCallback);
      for (let i = 0; i < self.onRejectedCallback.length; i += 1) {
        self.onRejectedCallback[i](reason);
      }
    }
  }
  try { // 用 try/catch 块包起来，并且在出错后以 catch 到的值 reject 掉这个 Promise
    // console.log('executor', executor);
    executor(resolve, reject); // 执行executor
  } catch (e) {
    console.log('reject');
    reject(e);
  }
}

Promise.prototype.then = function (onResolved, onRejected) {
  // console.log('then', this);
  const self = this;
  let promise2;
  onResolved = typeof onResolved === 'function' ? onResolved : function (v) {}
  onRejected = typeof onRejected === 'function' ? onRejected : function (r) {}

  if (self.status === 'resolved') {
    return promise2 = new Promise(function (resolve, reject) {
      try {
        const x = onResolved(self.data);
        if (x instanceof Promise) { // 如果onResolved的返回值是一个Promise对象，直接取它的结果做为promise2的结果
          // console.log('-');
          x.then(resolve, reject);
        }
        // console.log('--');
        resolve(x); // 否则，以它的返回值做为promise2的结果
      } catch (e) {
        reject(e); // 如果出错，以捕获到的错误做为promise2的结果
      }
    });
  }

  if (self.status === 'rejected') {
    return promise2 = new Promise(function (resolve, reject) {
      try {
        const x = onRejected(self.data);
        if (x instanceof Promise) {
          x.then(resolve, reject);
        }
      } catch (e) {
        console.log('then catch');
        reject(e);
      }
    })
  }

  if (self.status === 'pending') {
    return promise2 = new Promise(function (resolve, reject) {
      // console.log('pending push', self, this);
      self.onResolvedCallback.push(function (value) {
        try {
          const x = onResolved(self.data)
          if (x instanceof Promise) {
            x.then(resolve, reject)
          }
        } catch (e) {
          reject(e)
        }
      })

      self.onRejectedCallback.push(function (reason) {
        try {
          const x = onRejected(self.data)
          if (x instanceof Promise) {
            x.then(resolve, reject)
          }
        } catch (e) {
          reject(e)
        }
      })
    })
  }
}


new Promise((rel, rej) => {
  rel(1)
}).then((v) => {
  return new Promise((rel, rej) => {
  setTimeout(() => {
	console.log(v);
    rel(2)
  },1000)

  })
}).then((v) => {
  console.log(v)
})
// const promise = new Promise((resolve, reject) => {
//   console.log('promise', 1);
//   resolve(1);
// }).then((v) => {
//   console.log('res', v);
//   return new Promise();
// }, (v) => {
// }).then((v) => {
//   console.log('res', v);
//   return 3;
// }, (v) => {
// }).then((v) => {
//   console.log('res', v);
//   return 4;
// }, (v) => {
// });
