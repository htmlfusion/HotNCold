'use strict';

angular.module('angularPrototypeApp')
  .controller('Grade7Ctrl', function ($scope) {
    $scope.style = {};
    window.addEventListener('deviceorientation', function(event) {
	  var alpha = event.alpha;
	  var beta = event.beta;
	  var gamma = event.gamma;
      $scope.style = {'transform': 'rotate({}deg)'
      									.replace('{}', alpha)};
      console.log($scope.style);
      $scope.$apply();
	  // Do something
	}, false);

  });
