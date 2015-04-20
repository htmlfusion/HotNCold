'use strict';

angular.module('gishApp')
  .controller('MissionCtrl', function ($scope, $state, Scene) {
    $scope.scene = new Scene();
    $scope.scene.startLevel();
    $scope.$watch('scene.complete', function(){
      if($scope.scene.complete){
        $state.go('reward');
      }
    });
  });
