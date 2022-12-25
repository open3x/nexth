FROM node:18 as builder

WORKDIR /usr/app
COPY ./ /usr/app
# RUN apk add git
# RUN apk add bash
# RUN apk update && apk add --no-cache python3 && python3 --version
# RUN apk add pixman
# RUN apk add libxi-dev
# RUN apk add make
# RUN apk add g++
RUN ln -s /usr/bin/python3 /usr/local/bin/python
RUN apt update && apt install -y libxi-dev libsdl-pango-dev
RUN npm install --production
RUN npm install -D @types/node
RUN npm run build

CMD ["npm", "run", "start"]
