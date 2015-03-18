'use strict';

angular.module('angularPrototypeApp')
  .controller('PackageCtrl', function ($scope, $timeout, $state) {
    $timeout(function(){
      $state.go('package-land');
    },5000)
  });
