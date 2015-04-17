'use strict';

angular.module('gishApp')
  .factory('GeoCache', function (Resource) {

    var resource = Resource('/api/geocaches/:id');


    /**
     * Get bearing between a location ad the GeoCache
     * @param  {Object} location Must contain latitude and longitude
     * @return {number}          Bearing in degrees;
     */
    resource.prototype.bearingBetween = function (location) {
      //http://stackoverflow.com/questions/14651060/arrow-pointing-from-a-gps-position-to-another-not-pointing-in-right-direction-in

      var lat1 = this.location.latitude,
        lng1 = this.location.longitude,
        lat2 = location.latitude,
        lng2 = location.longitude,
        dLon = (lng2 - lng1).toRad(),
        lat1 = lat1.toRad(),
        lat2 = lat2.toRad();

      var y = Math.sin(dLon) * Math.cos(lat2);
      var x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) 
        * Math.cos(dLon);
      var rad = Math.atan2(y, x);
      var brng = rad.toDeg();

      return (brng + 360) % 360;

    };

    resource.prototype.userBearing = function(user){
      var bearing = this.bearingBetween(user.location);
      return bearing + user.heading;
    };

    return resource;

  });
