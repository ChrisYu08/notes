## git revert和git reset

git revert 是生成一个新的提交来撤销某次提交，此次提交之前的commit都会被保留
git reset 是回到某次提交，提交及之前的commit都会被保留，但是此次之后的修改都会被退回到暂存区
具体一个例子，假设有三个commit， git st:
commit3: add test3.c
commit2: add test2.c
commit1: add test1.c
当执行git revert HEAD~1时， commit2被撤销了
git log可以看到：
revert "commit2":this reverts commit 5fe21s2...
commit3: add test3.c
commit2: add test2.c
commit1: add test1.c
git status 没有任何变化
如果换做执行git reset --soft(默认) HEAD~1后，运行git log
commit2: add test2.c
commit1: add test1.c
运行git status， 则test3.c处于暂存区，准备提交。
如果换做执行git reset --hard HEAD~1后，
显示：HEAD is now at commit2，运行git log
commit2: add test2.c
commit1: add test1.c
运行git st， 没有任何变化
另外：
git revert <commit log string>是撤消该commit，作为一个新的commit。