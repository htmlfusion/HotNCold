'use strict';

angular.module('gishApp')
  .factory('geolocation', function($q) {

    /**
     * Copied from here https://raw.githubusercontent.com/driftyco/ng-cordova/master/src/plugins/geolocation.js
     * The main difference is that that watch position notifies for both
     * errors and success.
     */
    return {
      getCurrentPosition: function(options) {
        var q = $q.defer();

        navigator.geolocation.getCurrentPosition(function(result) {
          q.resolve(result);
        }, function(err) {
          q.reject(err);
        }, options);

        return q.promise;
      },

      watchPosition: function(options) {
        var q = $q.defer();

        var watchID = navigator.geolocation.watchPosition(function(result) {
          q.notify({
            location: result,
            error: null
          });
        }, function(err) {
          q.notify({
            location: null,
            error: err
          });
        }, options);

        q.promise.cancel = function() {
          navigator.geolocation.clearWatch(watchID);
        };

        q.promise.clearWatch = function(id) {
          navigator.geolocation.clearWatch(id || watchID);
        };

        q.promise.watchID = watchID;

        return q.promise;
      },

      clearWatch: function(watchID) {
        return navigator.geolocation.clearWatch(watchID);
      }
    };

  });
