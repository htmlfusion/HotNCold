'use strict';

angular.module('gishAppApp')
  .controller('IntroCtrl', function ($scope, $timeout, $state) {


    $scope.carouselIndex = 0;
    $scope.intros = [{
        caption: 'Welcome'
      },{
        caption: "You're going to have to move your feet"
      },{
        caption: 'The closer you get, the hotter you get',
        alignment: 'hot-text',
        transition: 'animate-enter'
      },{
        caption: 'The further you get, the colder you get',
        alignment: 'cold-text',
        transition: 'animate-enter'
      },{
        caption: 'Start moving!'
      }
    ];

    var promise;
    $scope.$watch('carouselIndex', function(){

      if($scope.carouselIndex === 4 ){

        promise = $timeout(function(){
          $state.go('gradient');
        }, 2500);

      } else if(promise){

        $timeout.cancel(promise);
        promise = null;

      } 



    });

  });
  

