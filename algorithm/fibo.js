// 斐波那契数列（Fibonacci sequence），又称黄金分割数列、因数学家列昂纳多·斐波那契（Leonardoda Fibonacci）
// 以兔子繁殖为例子而引入，故又称为“兔子数列”，指的是这样一个数列：0、1、1、2、3、5、8、13、21、34、……
function fibo(n) {
  var fib_n = function(curr, next, n) {
    if (n == 0) {
      return curr;
    }
    else {
      return fib_n(next, curr+next, n-1);
    }
  }
  return fib_n(0, 1, n);
}

fibo(10);
