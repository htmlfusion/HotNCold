FROM webratio/nodejs-with-android-sdk

# Installs Chrome Cordova App
# Forces a platform add in order to preload libraries
ENV CCA_VERSION 0.6.0
RUN npm install -g npm && \
    npm install -g cca@${CCA_VERSION} && \
    cd /tmp && \
    cca create fakeapp && \
    cd /tmp/fakeapp && \
    cca platform add android && \
    cd && \
    rm -rf /tmp/fakeapp

VOLUME ["/data"]
WORKDIR /data

EXPOSE 8000

