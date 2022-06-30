FROM nginx
LABEL name="myFrontEndProject"
LABEL version="1.0"
COPY ./dist /usr/share/nginx/html
COPY ./myFrontEndProject.conf /etc/nginx/conf.d
# nginx默认监听80port
EXPOSE 80
CMD npm start