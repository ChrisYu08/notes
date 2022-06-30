module.exports = {
  entry: "./add.js",
  output: {
    // mode: 'production',
    filename: './dist/add.js',
    libraryTarget: 'umd',
    library: 'add1',
    globalObject: 'this'
  }
}