'use strict';

angular.module('gishApp')
  .factory('User', function (Resource, geolocation, deviceOrientation, $cordovaGeolocation, 
      $cordovaDeviceOrientation) {

    var user = Resource('/api/users/:id/:controller', {
      id: '@_id'
    },
    {
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      }
    });

    user.prototype.location = null;
    user.prototype.heading = null;
    user.prototype.locationPromise = null;

    /**
     * Watch a user's geo location
     * @return {Promise} The promise will be notified whenever the user moves
     */
    user.prototype.watchPosition = function(){

      var posOptions = {
        timeout: 10000,
        enableHighAccuracy: true
      };

      var prom = geolocation.watchPosition(posOptions);

      prom.then(null, null, function(location){
        if(location.location){
          this.location = location.location.coords;
        }
      }.bind(this));

      this.locationPromise = prom;

      return prom;
    };

    /**
     * Get the user's position. This function should return quickly
     * because its not using high accuracy. For high accuracy us `watchPosition`
     * @return {Promise} The promise will resolve to a location and also update this users location
     */
    user.prototype.getCurrentPosition = function(){

      var posOptions = {
        timeout: 10000,
        enableHighAccuracy: false
      };

      var prom = $cordovaGeolocation.getCurrentPosition(posOptions)
      prom.then(function(position){
          this.location = position.coords;
        }.bind(this));
      return prom;

    };

    user.prototype.watchHeading = function(){
      var options = {frequency: 1000},
        prom;

      // If we're native than we'll use the cordova plugin
      if(navigator.compass){
        prom = $cordovaDeviceOrientation.watchHeading();
      } else {
        prom = deviceOrientation.watchHeading();
      }

      prom.then(null, function(){}, function(heading){
          this.heading = heading;
        }.bind(this));

      return prom;
    };

    return user;
  });
