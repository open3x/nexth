FROM public.ecr.aws/lambda/nodejs:16

COPY ./ /var/task/
RUN yum install -y pango-devel libXi-devel git python3 make gcc gcc-c++
RUN ln -s /usr/bin/python3 /usr/local/bin/python
RUN npm install --production
RUN npm install -D @types/node
ENV LD_LIBRARY_PATH /var/task/node_modules/canvas/build/Release
ENV LD_PRELOAD /var/task/node_modules/canvas/build/Release/libz.so.1

CMD ["index.handler"]
