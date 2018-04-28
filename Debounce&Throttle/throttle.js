/**
 * throttle
 * @param  {Function} fn         实际要执行的函数
 * @param  {Number}   threshhold 执行间隔，单位 ms
 * @return {Function}            返回一个节流函数
 */
const throttle = (fn, threshhold) => {
  let last;
  let timer = null;
  threshhold || (threshhold = 250);
  return function (...args) {
    const context = this;
    const now = +new Date();

    // 如果距离上一次执行 fn 函数的时间小于 threshhold, 放弃执行 fn
    // 并重新计时
    if (last && now < last + threshhold) {
      clearTimeout(timer);
      // 保证在当前时间区间结束后，再执行一次 fn
      timer = setTimeout(() => {
        last = now;
        fn.apply(context, args);
      }, threshhold);

    // 在时间区间的最开始和到达指定间隔的时间执行一次 fn
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
};

export default throttle;
