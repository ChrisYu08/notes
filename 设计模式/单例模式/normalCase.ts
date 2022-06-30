export {};

class Window {
  private static instance: Window;
  private constructor() {}
  public static getInstance() {
    if (!Window.instance) {
      Window.instance = new Window();
    }
    return Window.instance;
  }
}

// 把window做成单例
let w1 = Window.getInstance();
let w2 = Window.getInstance();

console.log(w1 === w2); //true

// es5实现

function Window1() {}

Window1.prototype.hello = function () {
  console.log("hello");
};
Window1.getInstance = (function () {
  let window: Window;
  return function () {
    if (!window) {
      window = new Window1();
    }
    return window;
  };
})();

let w3 = Window1.getInstance();
let w4 = Window1.getInstance();
console.log(w3 === w4); //true
