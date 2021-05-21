配置两个git 账号，或多个git账号

- default global 账号（自己的gmail），在全局～/.gitconifg 文件注册子.gitconfig 生效路径
  - 在子目录，配置公司账号,编写.gitconfig 配置，当前子目录下的所有项目的会采取子目录的gitconfig 配置，覆盖全局的git账号信息

> 全局根节点，也就是用户根目录

➜  sohu cat ~/.gitconfig
[user]
	name = personal username
	emial = personal email

[includeIf "gitdir:~/Desktop/lau/sohu/"]
	path = ~/Desktop/lau/sohu/.gitconfig

> 局部子节点，公司项目子目录

➜  sohu cat .gitconfig
[user]
	name = company username
	email = company email