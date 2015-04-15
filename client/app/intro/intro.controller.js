'use strict';

angular.module('gishApp')
  .controller('IntroCtrl', function ($scope, $timeout, $state) {


    $scope.carouselIndex = 0;

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
  

