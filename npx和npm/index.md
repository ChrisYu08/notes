## npx和npm的区别

npm的思路大概是这样的：
1. 买个服务器作为代码仓库（repository），在里面放所有需要被共享的代码
2. 发邮件通知 jQuery 、Bootstrap 、Underscore 的作者使用 npm publish 把代码提交到 repository 上，分别取名 jquery、bootstrap 和 underscore（注意大小写）。
3. 社区里的其他人如果想使用这些代码，就把 jquery、bootstrap 和 underscore 写到 package.json 里，然后运行 npm install ，npm 就会帮他们下载代码。
4. 下载完的代码出现在 node_modules 目录里，就可以随意使用了。这些可以被使用的代码被叫做「包」（package），这就是 npm名字的由来：Node Package(包) Manager(管理器)。

npx又是什么？npx是一个工具，npm v5.2.0引入的一条命令（npx），一个npm包执行器，指在提高从npm注册表使用软件包时的体验 ，npm使得它非常容易地安装和管理托管在注册表上的依赖项，npx使得使用CLI工具和其他托管在注册表。它大大简化了一些事情。就像npm极大地提升了我们安装和管理包依赖的体验，在npm的基础之上，npx让npm包中的命令行工具和其他可执行文件在使用上变得更加简单。它极大地简化了我们之前使用纯粹的npm时所需要的大量步骤。主要特点：
1. 临时安装可执行依赖包，不用全局安装，不用担心长期的污染。
2. 可以执行依赖包中的命令，安装完成自动运行。
3. 自动加载node_modules中依赖包，不用指定$PATH。
4. 可以指定node版本、命令的版本，解决了不同项目使用不同版本的命令的问题。以上就是npx与npm的区别。