// 类装饰器
/**
 * 类装饰器再类声明之前声明，用来监控、修改或替换类定义
 * 参数是类的定义或者说构造函数
 * babel-plugin-proposal-decorators
 */

/**
 * 
 * case
 * @connect
 * @readonly
 * 
*/

namespace a {
  interface Animal {
    swings: number
  }
  function flyable(target) {
    target.prototype.swings = 2;
  }
  // 装饰器
  @flyable
  class Animal {
    constructor() { }
  }
  let animal: Animal = new Animal();
  console.log(animal.swings);
}

namespace b {
  interface Animal {
    swings: number
  }
  function flyable(swings) {
    return function (target) {
      console.log(target)
      target.prototype.swings = swings;
    }
  }
  // 装饰器工厂
  @flyable(5)
  class Animal {
    constructor() { }
  }
  let animal: Animal = new Animal();
  console.log(animal.swings);
}