#!/bin/bash
WORK_PATH='/usr/projects/myProject'
cd $WORK_PATH
echo 'clean old code'
git reset -- origin/master
git clean -f
echo 'pull the lastest'
git pull origin master
echo 'build project'  #前端项目需要编译build
npm run build
echo 'build docker'
docker build -t my-project-frontend-image:1.0 . # 这里会找Dockerfile文件
echo 'stop and delete the old docker'
docker stop my-project-container
docker rm my-project-container
echo 'create new docker' # 这里面是nginx容器
docker container run -p 80:80 --name my-project-container -d my-project-frontend-image:1.0
