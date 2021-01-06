## 尾递归

- 定义：尾调用是指一个函数里的最后一个动作是一个函数调用的情形：即这个调用的返回值直接被当前函数返回的情形。这种情形下该调用位置为尾位置。

- 优点：
尾递归和一般的递归不同在对内存的占用，普通递归创建stack累积而后计算收缩，尾递归只会占用恒量的内存（和迭代一样）。


- for example
斐波那契数列
常规的斐波那契数列算法可能是这样的：
```javascript
 function fib(n) {
 
    if (n <= 2) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}
```

上面的这种递归计算最终的return操作是加法操作。所以不是尾递归。

如果用尾递归就是这样的：
```javascript
/**
 计算第n位斐波那契数列的值
  
 @param n 第n个数
 @param acc1 第n个数
 @param acc2 第n与第n+1个数的和
 @return 返回斐波那契数列值
 */
function tailfib(n,acc1,acc2) {
    if (n < 2) {
        return acc1;
    }
     
    return tailfib(n-1,acc2,acc1 + acc2);
}
```

阶乘的例子website：https://www.cnblogs.com/zhanggui/p/7722541.html