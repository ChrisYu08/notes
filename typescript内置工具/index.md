- website: https://mp.weixin.qq.com/s/aSOfFrsKd-r8KPSvir_TxQ
``` ts
1. Partial
type Partial<T> = {
    [P in keyof T]?: T[P];
};
interface UserInfo {
    name:string;
    age:number;
}

// 这里会将 UserInfo 所有的属性变为可选
const foo:Partial<UserInfo> = {
    name:"张三" 
}

2. Required

type Required<T> = {
    [P in keyof T]-?: T[P];
};
interface UserInfo {
    name?:string;
    age?:number;
}

// 这里会将 UserInfo 所有可选的属性变为必选
const foo:Required<UserInfo> = {
    name:"张三",
    age:18
}

3. Readonly

type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};
interface UserInfo {
    name?:string;
    age?:number;
}
 
const foo:Readonly<UserInfo> = {
    name:"张三",
    age:18
}
foo.name = '李四';// error: 无法分配到 "name" ，因为它是只读属性


4. Record
type Record<K extends keyof any, T> = {
    [P in K]: T;
};
// 这是通过 interface 定义出来的。
interface UserInfo {
    name:string;
    age:number;
}

// 我们用 Record 来实现一遍 UserInfo 。
// 注意：后面一个形参和 UserInfo 的是不一样的，因为 Record 第二个参数只能接受一个类型。所以这里要么用 any，要么用这种联合类型。
type UserInfoT = Record<"name" | "age", string | number>

// 结果
// type UserInfoT = {
//     name:string | number;
//     age:string | number;
// }

5. Pick
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
interface UserInfo {
    name:string;
    age:number;
}

// 这时候我们只需要 UserInfo 的 name 属性。
type UserInfoT = Pick<UserInfo, "name">

```