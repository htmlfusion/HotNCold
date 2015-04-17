'use strict';

angular.module('gishApp')
  .directive('gradient', function () {
    return {
      templateUrl: 'components/gameGraphics/gradient/gradient.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });