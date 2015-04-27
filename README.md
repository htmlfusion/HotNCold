# Hot/Cold


[![build status](https://git.htmlfusion.com:8081/projects/3/status.png?ref=master)](https://git.htmlfusion.com:8081/projects/3?ref=master)

## Getting Started

Make sure you have the dependencies below installed.

```
git clone git@git.htmlfusion.com:client/gish-app.git
cd gish-app
npm install
bower install
grunt serve
```

## Dependencies

### Server

  * [nodejs](http://nodejs.org/)
  * [bower](http://bower.io/#install-bower)
  * [grunt](http://gruntjs.com/getting-started#installing-the-cli)
  * [mongodb](http://docs.mongodb.org/manual/installation/)
  
### Client
  * [ruby](https://www.ruby-lang.org/en/)
  * [sass](http://sass-lang.com/install)
  * [Chrome Mobile App](https://github.com/MobileChromeApps/mobile-chrome-apps/blob/master/docs/Installation.md#install-the-cca-command-line-tool)
  * [Cordova](http://cordova.apache.org/docs/en/3.5.0/guide_cli_index.md.html)
  * [Android SDK](https://developer.android.com/sdk/index.html)


## Build for Cordova | Chrome Mobile App

### Setup

Make sure that within `server/config/local.env.js` your `DOMAIN`
is set to where the API is being served from. 

Examples:
     
     DOMAIN: 'evan.htmlfusion.com:9000'
     DOMAIN: 'http://10.0.2.163:9000'

This file is *not* committed to the repository. If you do not have the
file already, you may copy an example from `server/config/local.env.sample.js`


### Build and test
```
grunt cca
cd cca
./install-plugins.sh
cca run android
```
or

```
cca run ios
```

## Test Setup

There are 3 sets of test to run. To run all three, simply run:

    grunt test

### Server Tests
    grunt test:server

### Client Tests
    npm run update-webdriver
    
### End 2 End Tests

*First you will need to run this npm command*
    
    npm run update-webdriver
    
To run the tests

    grunt tests:e2e
    
### Build for Android

https://github.com/MobileChromeApps/mobile-chrome-apps/blob/master/docs/Publish.md

If you haven't already generated a keystore 

    cca exec keytool -genkey -v -keystore FILENAME.keystore -alias YOUR_PETS_NAME -keyalg RSA -keysize 2048 -validity 10000


From within the `cca` directory

    cca build android --release

Then use zipalign which you should be able to find in `adt-bundle`

For example:
    
    /Users/jvanderdoes/Code/adt-bundle/sdk/build-tools/19.1.0/zipalign
    
Then you can zip align the unaligned apk to an aligned version ready to upload.

    zipalign -f -v 4 /path/to/app.unaligned.apk gish-app.apk
    
Sign the app

    jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ~/ggg.keystore gish-app.apk YOUR_PET_NAME


### Deployment

#### Environment Variables

* `DOMAIN` fully qualified domain and port for server (http://gishapp.com:8080)
* `SESSION_SECRET`

#### Configuration

test | development | production configs live in `server/config/environment/*.js`

The development config is probably the most up-to-date

```
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/gishapp-dev'
  },
  
  redis: {
    host: 'localhost',
    port: 6379
  },
  
  localStorage: {
    dir: __dirname+'/../../../client/media/'
  },

  seedDB: false 
};
```

#### Processes

* `node server/app.js`

