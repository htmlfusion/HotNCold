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
    
    //  	$scope.style = {
    // 	background: '#15376d';
    // 	background: '-moz-linear-gradient(top, #15376d 0%, #931fa3 25%, #db232c 50%, #dd8023 75%, #f2e14d 100%)',
    // 	background: '-webkit-gradient(linear, left top, left bottom, color-stop(0%, #15376d), color-stop(25%, #931fa3), color-stop(50%, #db232c), color-stop(75%, #dd8023), color-stop(100%, #f2e14d))',
    // 	background: '-webkit-linear-gradient(top, #15376d 0%, #931fa3 25%, #db232c 50%, #dd8023 75%, #f2e14d 100%)',
    // 	background: '-o-linear-gradient(top, #15376d 0%, #931fa3 25%, #db232c 50%, #dd8023 75%, #f2e14d 100%)',
    // 	background: '-ms-linear-gradient(top, #15376d 0%, #931fa3 25%, #db232c 50%, #dd8023 75%, #f2e14d 100%)',
    // 	background: 'linear-gradient(to bottom, #15376d 0%, #931fa3 25%, #db232c 50%, #dd8023 75%, #f2e14d 100%)',
    // 	filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#15376d', endColorstr='#f2e14d',GradientType=0 )"
    // };

    window.addEventListener('deviceorientation', function(event) {
	  var alpha = event.alpha;
	  var beta = event.beta;
	  var gamma = event.gamma;
      $scope.style = {'transform': 'rotate({}deg)'.replace('{}', alpha)};
      console.log($scope.style);
      $scope.$apply();
	  // Do something
	}, false);


    $scope.message = 'Hello';
  });