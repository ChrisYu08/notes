递归优化(recursion optimization)

1. reduce repeated calculation（重复子问题优化）
   fn(n)+ fn(n-1)+ ...+ fn(1) => fn(1)+ fn(2) + ... +fn(n)

2. 尾递归tail recursion（单个递归调用体作为程序的最后返回）
  尾递归一般都可以用循环替换来写（等价）
