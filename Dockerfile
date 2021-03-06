FROM dockerfile/nodejs

RUN apt-get update -qq && apt-get install -y build-essential
RUN apt-get install -y ruby
RUN gem install sass

RUN mkdir /src

RUN npm install grunt-cli -g; npm install bower -g

WORKDIR /src
ADD ./package.json /src/package.json
RUN npm install

ADD Gruntfile.js /src/Gruntfile.js

EXPOSE 3000
EXPOSE 35729

CMD ["npm", "start"]

