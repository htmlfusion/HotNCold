'use strict';

angular.module('angularPrototypeApp')
  .controller('SpinStartCtrl', function ($scope, $timeout) {
    var timeout = $timeout(function(){
      $state.go('Spin-small');
    }, 2000);
  });
