'use strict';

angular.module('gishAppApp')
  .controller('IntroCtrl', function ($scope, $timeout) {
    $scope.intros = [
      {title: "Welcome"},
      {title: "You're going to have to move your feet", link: "gradient"},
      {title: "The closer you get, the hotter you get", link: "gradient"},
      {title: "The further you get, the colder you get", link: "gradient"},
      {title: "Start moving!", link: "gradient"},
    ];
    $scope.user = {name: ''};
  });
