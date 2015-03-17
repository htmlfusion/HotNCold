'use strict';

angular.module('angularPrototypeApp')
  .controller('Grade9Ctrl', function($scope) {


    var goal = [34.070932, -118.361759];
    //http://stackoverflow.com/questions/14651060/arrow-pointing-from-a-gps-position-to-another-not-pointing-in-right-direction-in
    function bearing(lat1, lng1, lat2, lng2) {
      var dLon = toRad(lng2 - lng1);
      lat1 = toRad(lat1);
      lat2 = toRad(lat2);
      var y = Math.sin(dLon) * Math.cos(lat2);
      var x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
      var rad = Math.atan2(y, x);
      var brng = toDeg(rad);
      return (brng + 360) % 360;
    }

    $scope.gradePosition = {
      '{g1}': 0,
      '{g2}': 25,
      '{g3}': 50,
      '{g4}': 75,
      '{g5}': 100
    }

    window.addEventListener('deviceorientation', function(event) {

      $scope.style = {
    		background: "linear-gradient(to bottom, #f2e14d {g1}%, #dd8023 {g2}%, #db232c {g3}%, #931fa3 {g4}%, #931fa3 {g5}%)",
        transform: 'rotate({}deg)'
      };

      var alpha = event.alpha;
      var beta = event.beta;
      var gamma = event.gamma;

      $scope.style.transform = $scope.style.transform.replace('{}', alpha);
      Object.keys($scope.gradePosition).forEach(function(key){
      	$scope.style.background = $scope.style.background.replace(key, $scope.gradePosition[key]);
      });

      console.log($scope.style);
      $scope.$apply();
      // Do something
    }, false);


    $scope.message = 'Hello';
  });