### Partial

#### website:https://zhuanlan.zhihu.com/p/40311981
#### where to use:https://segmentfault.com/a/1190000019758521
#### 泛型约束、extends：https://zhuanlan.zhihu.com/p/43475247

Partial 作用是将传入的属性变为可选项.

首先我们需要理解两个关键字 keyof 和 in, keyof 可以用来取得一个对象接口的所有 key 值.

```typescript
    interface Foo {
      name: string;
      age: number
    }
    type T = keyof Foo // -> "name" | "age"
```

而 in 则可以遍历枚举类型, 例如
```typescript
    type Keys = "a" | "b"
    type Obj =  {
      [p in Keys]: any
    } // -> { a: any, b: any }
```
实现一个partial
```typescript
    type Partial<T>={
      [P in keyof T]:T[P]
    }
```

