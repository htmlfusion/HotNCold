'use strict';

angular.module('gishAppApp')
  .controller('IntroCtrl', function ($scope, $timeout) {
    $scope.intros = [
      {title: 'Welcome'},
      {title: 'Start walking', link: 'gradient'}
    ];
    $scope.user = {name: ''};
  });
