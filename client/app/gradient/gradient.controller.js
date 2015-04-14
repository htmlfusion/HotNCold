'use strict';

angular.module('gishAppApp')
  .controller('GradientCtrl', function($scope, $state, geolocation) {


    //On win $state.go('goodjob');


    $scope.distance = 0;
    var goal = null,
      user = null,
      totalDistance = null,
      minRange = .003,
      maxRange = .005,
      findDistance = 100;

    function toRad(deg) {
      return deg * Math.PI / 180;
    }

    function toDeg(rad) {
      return rad * 180 / Math.PI;
    }

    function getRandomBetween(min, max) {
      return Math.random() * (max - min) + min;
    }


    function nearByLocation(location){

      var latDir = (Math.random()>.5) ? 1 : -1,
        longDir = (Math.random()>.5) ? 1 : -1,
        randLat = getRandomBetween(minRange, maxRange) * latDir,
        randLong = getRandomBetween(minRange, maxRange) * longDir;
        
      return {
        latitude: location.latitude + randLat,
        longitude: location.longitude + randLong,
      }
    };


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

    geolocation.watchPosition(posOptions)
      .then(null,
        function(err) {
          console.log(err);
        },
        function(data) {
          if(data.location){
            user = data.location.coords;
            if( !goal ){
              goal = nearByLocation(user);
            }
            if (totalDistance === null) {
              totalDistance = geolib.getDistance(goal, user);
            }
          } else {
            console.log('err', data);
          }
        });

    //linear-gradient(rgb(240, 50, 25) 0%, rgb(37, 0, 245) 100%)

    $scope.style = {
      background: "linear-gradient(rgb(240, 50, 25) 0%, rgb(37, 0, 245) 100%)",
      transform: 'rotate({}deg)',
      '-webkit-transform': 'rotate({}deg)'
    };

    var onOrientationChange = function(event) {

      var alpha = event.alpha,
        remaining = null,
        progress,
        incr,
        bearing;

      if (user !== null && totalDistance !== null) {

        $scope.style = {
          background: "linear-gradient(rgb(240, 50, 25) {g1}%, rgb(37, 0, 245) 100%)",
          transform: 'rotate({}deg)',
          '-webkit-transform': 'rotate({}deg)'
        };

        var distance = geolib.getDistance(goal, user);
        $scope.distance = distance;

        if(distance<=findDistance){
          goal = null;
          totalDistance = null;
          window.removeEventListener('deviceorientation', onOrientationChange);
          $state.go('reward');
        }

        progress = (totalDistance - distance) / totalDistance * 100;
        remaining = 100 - progress;
        incr = remaining / 4;;
        bearing = getBearing(user, goal) + alpha;

        gradePosition['{g1}'] = progress;
        // gradePosition['{g2}'] = progress + incr;
        // gradePosition['{g3}'] = progress + incr * 2;
        // gradePosition['{g4}'] = progress + incr * 3;
        // gradePosition['{g5}'] = progress + incr * 4;
      }


      $scope.style.transform = $scope.style.transform.replace('{}', bearing);
      $scope.style['-webkit-transform'] = $scope.style['-webkit-transform'].replace('{}', bearing);


      Object.keys(gradePosition).forEach(function(key) {
        $scope.style.background = $scope.style.background.replace(key, gradePosition[key]);
      });

      //console.log($scope.style);
      $scope.$apply();
      // Do something
    };

    window.addEventListener('deviceorientation', onOrientationChange, false);

  });