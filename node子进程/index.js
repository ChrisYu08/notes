// node中可以开启子进程，目的是为了充分利用多核cpu
// 开启子进程 可以帮助我们计算一些cpu密集型的操作
// node单线程， java这种多线程的可以开启另一个线程来操作

const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
console.log(process.pid); // 每个进程都有一个id号

// node sum.js --port xxx --cwd directory
const cp = spawn("node", ["sum.js"], {
  // current working directory
  cwd: path.resolve(__dirname, "worker"),
  // stdio:'ignore' // 如果填写ignore，默认会忽略掉 子进程的输出
  // stdio: [process.stdin, process.stdout, process.stderr] 'inherit' [0,1,2]
  //共享父进程的标注输出 错误输出 以及 标准输入
  // stdio:'pipe' // ['pipe','pipe','pipe'] 默认就是pipe

  stdio: "inherit",
});

// cp.stdout.on("data", function (data) {
//   console.log(data.toString(), "---");
// });

cp.on("error", function (err) {
  console.log(err);
});
cp.on("close", function () {
  console.log("子进程关闭了");
});
cp.on("error", function (err) {
  console.log("子进程退出了");
});
