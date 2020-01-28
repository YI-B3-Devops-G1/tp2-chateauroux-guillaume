FROM nginx:alpine

RUN rm -rf /etc/nginx/conf.d/default.conf
COPY ./conf.d/api.conf /etc/nginx/conf.d/default.conf
