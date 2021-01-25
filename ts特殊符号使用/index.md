## ts特殊符号使用

1. 属性或参数中使用 ？：表示该属性或参数为可选项

2. 属性或参数中使用 ！：表示强制解析（告诉typescript编译器，这里一定有值），常用于vue-decorator中的@Prop

3. 变量后使用 ！：表示类型推断排除null、undefined