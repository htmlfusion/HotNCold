'use strict';

angular.module('gishApp')
  .factory('deviceOrientation', function($q) {

    return {

      watchHeading: function() {
        var q = $q.defer();

        var callback =  function(event){
          q.notify(event.alpha);
        };

        window.addEventListener('deviceorientation', callback, true);

        q.promise.cancel = function() {
          window.removeEventListener('deviceorientation', callback);
        };

        q.promise.clearWatch = function(cb) {
          window.removeEventListener('deviceorientation', cb || callback);
        };

        q.promise.watchID = callback;

        return q.promise;
      },

    };

  });
