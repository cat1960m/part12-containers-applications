FROM node:20
   
# where files wii be copied in image
WORKDIR /usr/src/app

# owner of all files is 'node' ( as user and group. if we will change permission 'chmod u+rwx script.sh' - user = 'node' )
COPY --chown=node:node . .  

# instead npm install (first remove node-modules)
RUN npm ci 

#This ensures that when your app runs, any debug('todo-backend:...') statements will print to the console.
ENV DEBUG=phonebook-backend:*
  
#Runs the app securely as a non-root user
USER node

#default command - can be changed
CMD npm start

# docker build -t todo-back . && docker run -p 3000:3000 todo-back