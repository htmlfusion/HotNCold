'use strict';

angular.module('angularPrototypeApp')
  .controller('PackageLandCtrl', function ($scope, $timeout, $state) {
    var timeout = $timeout(function(){
      $state.go('package-start');
    },2000);
  });
