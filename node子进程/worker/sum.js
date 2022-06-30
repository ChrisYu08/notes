let total = 0;

for (let i = 0; i < 100 * 10000; i++) {
  total += 1;
}

process.stdout.write(total + "");
// console.log(process.pid)
// console.log(total);
