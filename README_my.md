1. install docker on my MAC

---

> brew install docker
> brew install colima
> colima start

2. first container

---

> docker container run hello-world

3. list all running containers

   > docker ps

4. lst all containers (running + stop) or( >docker container ls -a)

---

> docker ps -a

5. container with ubuntu and echo

---

> docker run ubuntu echo "Hello from Ubuntu container!"

6. mount folder from my MAC to ubuntu as "scripts"

---

> docker run --rm -v /Users/kateryna.dobrovolska/Desktop/my_tutorials/fuullstack_course/part12-containers-applications/script-answers:/scripts ubuntu ls /scripts

7. exec file in ubuntu

---

> docker run --rm -v /Users/kateryna.dobrovolska/Desktop/my_tutorials/fuullstack_course/part12-containers-applications/script-answers:/scripts ubuntu bash /scripts/exercise12_2.txt

8. My current directory

---

> pwd

9. exec script (file that start with "#!/bin/bash") in ubuntu without bash( terminal to exec scripts)

---

chmod +x exercise12_2.txt && \
docker run --rm -v $(pwd):/scripts ubuntu /scripts/exercise12_2.txt

10. create folder and file in it on ubuntu (create parent folder if needed)
---

a)>docker run -it --rm ubuntu bash
b)
mkdir -p /usr/src/app
echo "hello from me" > /usr/src/app/index.js
cat /usr/src/app/index.js
exit

11)create folder and file in it on ubuntu (create parent folder if needed) with install nano
--------

a)>docker run -it --rm ubuntu bash
b)>apt update && apt install nano -y
b)
mkdir -p /usr/src/app
nano /usr/src/app/index.js
echo "hello from me" >> /usr/src/app/index.js
cat /usr/src/app/index.js

12. clear
---

> docker container prune

13. list of images
---

> docker image ls

14. create container_name -> new_image_name
---

> docker commit hopeful_clarke hello-node-world

15. remove stopped container
---

> docker rm <name_or_id_container>

16. run container with name "hello-node" by node image (version 20)
---

> docker container run -it --name hello-node node:20 bash

17. create image with name "fs-hello-world" by 'Dockerfile' in current folder (of -f path/to/some_dockerfile) and docker diamond will use current dir(.) as source of files to copy
----------
    > docker build -t fs-hello-world .

18. run container by image
---

> docker run fs-hello-world      #(default CMD will be executed but we can change it)
> or
> docker run -it fs-hello-world bash #( default command (CMD) will not exec)

19. remove image with name "hello_node_world"
---
> docker image rm hello_node_world

20. if needed to use ports:  - create image with name 'express-server' from Dockerfile of current directory (.)
  using files from current directory to COPY
---------
    > docker build -t express-server .
    > docker run -p 3123:3000 express-server . #(host-port:application-port)

21. use compose 'docker-compose.yml' file
--------
    > docker compose up
    > or
    > docker compose up -d #(-d for detached)
    > docker compose down #(if started with -d)


22) use different yml file (docker-compose.dev.yml)
-------
>docker compose -f docker-compose.dev.yml up

23) how to refere to data from docker:
inside a Docker container, localhost refers to the container itself, not your host machine. So your app must use service names like redis and mongo to reach other containers(name of service in compose file)

env
REDIS_URL=redis://redis:6379
MONGO_URL=mongodb://root:example@mongo:27017/the_databasei
