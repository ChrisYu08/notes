##

website: https://juejin.cn/post/6844904066485583885#heading-1

##

example:

```typescript
  const langFormatMsg = (formatMessage) => {
    return function <T extends TypeName>(
      id: string,
      values?: any,
      type?: T
    ): ObjectType<T> {
      if (type === 'text') {
        return `${formatMessage({ id }, values)}` as ObjectType<T>;
      }
      return (<>{formatMessage({ id }, values)}</>) as ObjectType<T>;
    };
  };

  langFormatMsg(function () { }) <'html'>('1',1,'html')
```

