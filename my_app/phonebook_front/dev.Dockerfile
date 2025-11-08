FROM node:20

WORKDIR /usr/src/app

COPY . .

# Change npm ci to npm install since we are going to be in development mode
RUN npm install

# npm run dev is the command to start the application in development mode
CMD ["npm", "run", "dev", "--", "--host"]

# docker build -f dev.Dockerfile -t image_phonebook_front_dev .
# docker run  -p 5173:5173  -v "$(pwd):/usr/src/app/" image_todo-front_dev   
# not working on MAC so before it exec:

# docker run  -it  -v "$(pwd):/usr/src/app/" image_phonebook_front_dev  bash -c "npm install" 
# docker run  -it  -v "$(pwd):/usr/src/app/" image_phonebook_front_dev  bash -c "npm install" 