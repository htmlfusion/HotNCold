'use strict';

angular.module('angularPrototypeApp')
  .controller('PackageLandCtrl', function ($scope, $timeout, $state) {
    $timeout(function(){
      $state.go('package-start');
    },5000)
  });
