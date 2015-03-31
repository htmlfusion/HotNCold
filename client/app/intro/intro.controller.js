'use strict';

angular.module('gishAppApp')
  .controller('IntroCtrl', function ($scope) {
    $scope.intros = [
      {title: 'Welcome'},
      {title: 'Start walking'}
    ];
  });
