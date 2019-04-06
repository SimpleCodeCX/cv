#sudo docker pull 168.70.160.165:8888/node:latest

#sudo docker build -t 168.70.160.165:9999/cv-client .

#sudo docker tag 168.70.160.165:9999/cv-client  168.70.160.165:9999/cv-client:$1

#sudo docker push 168.70.160.165:9999/cv-client


sudo docker build -t cv-client .

sudo docker run -it --name cv-client -p 8081:80 cv-client


