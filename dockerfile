#can we go smaller then node image?
FROM node:17.3.0

#snag the files
COPY . /

#web shit
RUN npm install -g serve 

#entrypoint
RUN chmod +x run.sh
ENTRYPOINT [ "./run.sh" ]