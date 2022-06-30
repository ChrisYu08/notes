#!/bin/bash
WORK_PATH='/usr/projects/myProject'
cd $WORK_PATH
echo 'clean old code'
git reset -- origin/master
git clean -f
echo 'pull the lastest'
git pull origin master
echo 'build docker'
docker build -t my-project-backend-image:1.0 . # 这里会找Dockerfile文件
echo 'stop and delete the old docker'
docker stop my-project-container
docker rm my-project-container
echo 'create new docker'
docker container run -p 3000:3000 --name my-project-container -d my-project-backend-image:1.0
