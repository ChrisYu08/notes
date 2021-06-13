## useCallback 和 useMemo

### website:
- https://blog.csdn.net/sinat_17775997/article/details/94453167
- https://www.cnblogs.com/owenma/p/12035619.html

useCallback和useMemo的参数跟useEffect一致，他们之间最大的区别有是useEffect会用于处理副作用，而前两个hooks不能。(用于返回函数，比如缓存的事件函数)

### 什么叫副作用
- website：https://www.zhihu.com/question/303338688
  
  不纯的，使函数变得不纯的，具有不确定性的操作，你都可以理解为是不纯的，不纯的那么意味可能带来副作用。

useMemo和useCallback都会在组件第一次渲染的时候执行，之后会在其依赖的变量发生改变时再次执行；并且这两个hooks都返回缓存的值，useMemo返回缓存的变量，useCallback返回缓存的函数。(用于返回缓存的变量，变量也可以是一个函数)

- example

### useCallback 和 useMemo有点类似于vue里的computed(){}

useMemo相当于computed
useCallback可以用在父组件给子组件传递函数参数的时候用到，避免子组件的没必要更新。
