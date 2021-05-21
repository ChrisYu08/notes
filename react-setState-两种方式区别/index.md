## website:https://blog.csdn.net/weixin_34072159/article/details/93173114

- 传入对象
```javascript
  setState({
    a:1
  })
  是一个Object.assign({},{a:1})的过程。
  this.setState({
      count: this.state.count + 1
  });
  
  this.setState({
      count: this.state.count + 1
  });
  只会+1
```

- 传入函数
  函数式相当于把函数push到一个栈当中，然后再一起遍历调用。
```javascript
  this.setState((prevState, props) => ({
      count: prevState.count + 1
  }));
```