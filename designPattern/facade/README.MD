Facade 模式提供一个方便的高层次接口，能够隐藏底层的真实复杂性。

当使用 Facade 模式时，要试着了解涉及的任何性能成本，并确认是否值得抽象。

```
var addEvent = function (el, ev, fn) {
  if (el.addEventListener) {
    el.addEventListener(ev, fn, false);
  } else if (el.attachEvent) {
    el.attachEvent('on' + ev, fn);
  } else {
    el['on' + ev] = fn;
  }
}
```
