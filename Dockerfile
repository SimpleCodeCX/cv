FROM nginx

MAINTAINER "Simple" "248200851@qq.com"

COPY dist /usr/share/nginx/html

COPY nginx/default.conf /etc/nginx/conf.d/

RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

EXPOSE 80
