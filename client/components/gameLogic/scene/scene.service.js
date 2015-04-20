'use strict';

angular.module('gishApp')
  .factory('Scene', function (Resource, User, GeoCache, $q, $timeout) {

    // Public API here
    var Scene = Resource('/api/scenes/:id');

    /**
     * Initialize or reset the scene
     */
    Scene.prototype.init = function(){

      this.user = new User();
      this.goal = null;

      this.distance = 300;
      this.totalDistance = 300;
      this.threshold = 100;
      this.progress = 0;
      this.remaining = 100;

      this.complete = false;

      //Bearing between the user and their goal
      this.bearing = 0;

    };

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

      var geoCache = new GeoCache();

      var dist = distance / 1000 / 6371;  
      var brng = Math.PI * 2 * Math.random();  

      var lat1 = location.latitude * Math.PI / 180, 
        lon1 = location.longitude * Math.PI / 180;

      var lat2 = Math.asin(Math.sin(lat1) * Math.cos(dist) + 
                            Math.cos(lat1) * Math.sin(dist) * Math.cos(brng));

      var lon2 = lon1 + Math.atan2(Math.sin(brng) * Math.sin(dist) *
                                    Math.cos(lat1), 
                                    Math.cos(dist) - Math.sin(lat1) *
                                    Math.sin(lat2));

      geoCache.location = {latitude: lat2 * 180 / Math.PI, longitude: lon2 * 180 / Math.PI};

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
        .then(function(position){

          this.goal = this.createRandomCache(position.coords, this.distance);

          this.user.watchPosition()
            .then(null, null, function(location){

              this.distance = geolib.getDistance(this.user.location, this.goal.location);
              this.progress = (this.totalDistance - this.distance) / this.totalDistance * 100;
              this.remaining = 100 - this.progress;


              if(this.distance < this.threshold){
                this.complete = true;
              }

            }.bind(this));

          this.user.watchHeading()
            .then(null, null, function(heading){
              this.bearing = this.goal.userBearing(this.user);
            }.bind(this));

          deferred.resolve();

        }.bind(this))
        .catch(deferred.reject);

      return deferred.promise;

    };

    return Scene;
  });
