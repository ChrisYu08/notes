## website: https://blog.csdn.net/csm0912/article/details/90264026

如果package-lock.json存在，则两者安装后结果可能不一样。因为cnpm install安装时，是不会去从package-lock.json中读取依赖包的版本信息的。
- npm 5版本，在延续npm 3扁平化依赖包安装方式的基础上，新增了一个package-lock.json文件。package-lock.json的主要作用就是锁定依赖项的安装目录和依赖包的版本信息。 
- 关于package.json和package-lock.json中的区别，可查看文章<a href="https://blog.csdn.net/u013992330/article/details/81110018">nodejs中package.json和package-lock.json文件的功能分析</a>


 当我们执行npm install的时候，node会从package.json文件读取模块名称，从package-lock.json文件中获取版本号。而cnpm install是不会去pack-lock.json中获取任何信息的，它只会根据各依赖包的配置下载对应版本的包。