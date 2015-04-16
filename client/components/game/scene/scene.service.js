'use strict';

angular.module('gishApp')
  .factory('Scene', function (Resource, User, GeoCache, $q) {

    // Public API here
    var Scene = Resource('/api/scenes/:id');

    /**
     * Initialize or reset the scene
     */
    Scene.prototype.init = function(){

      this.user = new User();
      this.goal = null;
      this.distance = 300;
      this.threshold = 100;
      this.complete = false;

    }

    /**
     * A factory for GeoCache objects randomly placed within a specified distance
     * @param  {Object} location  Must contain a latitude and longitude
     * @param  {Number} distance  Distance in meters
     * @return {GeoCache}         A new geo cache
     */
    Scene.prototype.createRandomCache = function(location, distance){
      // http://stackoverflow.com/questions/2637023/how-to-calculate-the-latlng-of-a-point-a-certain-distance-away-from-another
      // This is based on the stack overflow question above. 
      // Instead, however, we are using a random bearing.

      Number.prototype.toRad = function() {
        return this * Math.PI / 180;
      }

      Number.prototype.toDeg = function() {
        return this * 180 / Math.PI;
      }

      var geoCache = new GeoCache();

      var dist = distance / 1000 / 6371;  
      var brng = Math.PI * 2 * Math.random();  

      var lat1 = location.latitude.toRad(), 
        lon1 = location.longitude.toRad();

      var lat2 = Math.asin(Math.sin(lat1) * Math.cos(dist) + 
                            Math.cos(lat1) * Math.sin(dist) * Math.cos(brng));

      var lon2 = lon1 + Math.atan2(Math.sin(brng) * Math.sin(dist) *
                                    Math.cos(lat1), 
                                    Math.cos(dist) - Math.sin(lat1) *
                                    Math.sin(lat2));

      geoCache.location = {latitude: lat2.toDeg(), longitude: lon2.toDeg()};

      return geoCache;

    };



    /**
     * Initializes the scene and starts the level
     * @return {Promise} Promise resolves when the scene has be initialized
     */
    Scene.prototype.startLevel = function(){

      this.init();

      var deferred = $q.defer();

      this.user.getCurrentPosition()
        .then(function(location){

          this.goal = this.createRandomCache(location, this.distance);

          this.user.watchPosition()
            .then(function(location){
              this.distance = geolib.getDistance(this.user.location, this.goal.location);
              if(this.distance < this.threshold){
                this.complete = true;
              }

            }.bind(this));

          deferred.resolve();

        }.bind(this))
        .catch(deferred.reject);
        
      return deferred.promise;

    };

    return Scene;
  });
