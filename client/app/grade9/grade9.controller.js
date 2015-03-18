'use strict';

angular.module('angularPrototypeApp')
  .controller('Grade9Ctrl', function($scope, $cordovaGeolocation) {


    var goal = {
        latitude: 34.025994,
        longitude: -118.394696
      },
      user = null,
      totalDistance = null;

    function toRad(deg) {
      return deg * Math.PI / 180;
    }

    function toDeg(rad) {
      return rad * 180 / Math.PI;
    }


    //http://stackoverflow.com/questions/14651060/arrow-pointing-from-a-gps-position-to-another-not-pointing-in-right-direction-in
    function getBearing(loc1, loc2) {
      var lat1 = loc1.latitude;
      var lng1 = loc1.longitude;

      var lat2 = loc2.latitude;
      var lng2 = loc2.longitude;

      var dLon = toRad(lng2 - lng1);
      lat1 = toRad(lat1);
      lat2 = toRad(lat2);
      var y = Math.sin(dLon) * Math.cos(lat2);
      var x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
      var rad = Math.atan2(y, x);
      var brng = toDeg(rad);
      return (brng + 360) % 360;
    }

    var gradePosition = {
      '{g1}': 0,
      '{g2}': 25,
      '{g3}': 50,
      '{g4}': 75,
      '{g5}': 100
    };


    var posOptions = {
      timeout: 10000,
      enableHighAccuracy: true
    };

    $cordovaGeolocation.watchPosition(posOptions)
      .then(null,
        function(err) {
          console.log(err);
        },
        function(location) {
          user = location.coords;
          if (totalDistance === null) {
            totalDistance = geolib.getDistance(goal, user);
          }
        });

    window.addEventListener('deviceorientation', function(event) {

      var alpha = event.alpha,
        remaining = null,
        progress,
        incr,
        bearing;

      $scope.style = {
        background: "linear-gradient(to bottom, #f2e14d {g1}%, #dd8023 {g2}%, #db232c {g3}%, #931fa3 {g4}%, #931fa3 {g5}%)",
        transform: 'rotate({}deg)'
      };

      if (user !== null && totalDistance !== null) {
        var distance = geolib.getDistance(goal, user);

        progress = (totalDistance - distance) / totalDistance * 100;
        remaining = 100 - progress;
        incr = remaining / 4;;
        bearing = getBearing(user, goal)+alpha;
      }

      gradePosition['{g1}'] = progress;
      gradePosition['{g2}'] = progress + incr;
      gradePosition['{g3}'] = progress + incr * 2;
      gradePosition['{g4}'] = progress + incr * 3;
      gradePosition['{g5}'] = progress + incr * 4;

      $scope.style.transform = $scope.style.transform.replace('{}', bearing);


      Object.keys(gradePosition).forEach(function(key) {
        $scope.style.background = $scope.style.background.replace(key, gradePosition[key]);
      });

      console.log($scope.style);
      $scope.$apply();
      // Do something
    }, false);


    $scope.message = 'Hello';
  });