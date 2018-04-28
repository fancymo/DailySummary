/**
 * debounce 防抖动，在停止操作 delay ms 时执行
 * @param  {Function} fn    实际要执行的函数
 * @param  {Number}   delay 延迟事件，单位是毫秒
 * @return {Function}       返回一个‘debounce’的函数
 */
const debounce = function (fn, delay) {
  // 定时器，用来 setTimeout
  let timer = null;

  // 返回一个函数，这个函数会在一个事件区间结束后 delay 毫秒时执行 fn 函数
  return function (...args) {
    const context = this;
    // 每次返回的函数被调用，清除定时器，保证不执行 fn
    clearTimeout(timer);

    // 当返回的函数被最后一次调用后（用户停止某个连续的操作），
    // 再过 delay ms 执行 fn
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};
export default debounce;
