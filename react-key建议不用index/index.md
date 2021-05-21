## react为什么不能用Index作为key

https://blog.csdn.net/qq_34149805/article/details/84559343

总结当数组顺序发生变化但元素内容未变化时，index的key会重新渲染，id的key只会元素移动位置不会重新渲染；另一个场景当数组map输出input(非受控组件)，在所有输入框输入值时，然后通过点击事件在数组头部加一个元素或颠倒数组元素，会发现input刚才所输入的值依然存在并没有进行更新。