'use strict';

angular.module('gishApp')
  .factory('User', function (Resource, geolocation, $cordovaGeolocation) {

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

      prom.then(function(location){
        this.location = location;
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

      return $cordovaGeolocation.getCurrentPosition(posOptions)
        .then(function(position){
          this.location = position;
        }.bind(this));

    };

    return user;
  });
