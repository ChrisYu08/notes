## 设计模式

## website:
- SOLID原则 https://zhuanlan.zhihu.com/p/82324809
- KISS原则 https://blog.csdn.net/zhongguomao/article/details/104929600

- 工厂模式
  - 简单工厂
    函数里返回类的实例
    ```typescript
      window.$=function(selector:string){
        return new JQuery(selector)
      }
    ```