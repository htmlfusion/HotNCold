'use strict';

angular.module('gishAppApp')
  .controller('IntroCtrl', function ($scope, $timeout) {

    $scope.carouselIndex = 0;
    $scope.intros = [{
        caption: 'Welcome'
      },{
        caption: "You're going to have to move your feet"
      },{
        caption: 'The closer you get, the hotter you get',
        alignment: 'hot-text'
      },{
        caption: 'The further you get, the colder you get',
        alignment: 'cold-text'
      },{
        caption: 'Start moving!'
      },{
        caption: ''
      }
    ];

  });
  

