'use strict';

angular.module('angularPrototypeApp')
  .controller('PackageCtrl', function ($scope, $timeout, $state) {

    var timeout = $timeout(function(){
      $state.go('package-land');
    },2000);
    
  });
