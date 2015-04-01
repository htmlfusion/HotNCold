'use strict';

angular.module('gishAppApp')
  .directive('colors', function() {
    return {
      templateUrl: 'components/colors/colors.html',
      restrict: 'EA',
      link: function(scope, element, attrs) {

        console.log('hello');
        // var topLeft = view.center - [80, 80];
        // var bottomRight = view.center + [80, 80];

        // // Create a rectangle shaped path between
        // // the topLeft and bottomRight points:
        // var path = new Path.Rectangle({
        //   topLeft: topLeft,
        //   bottomRight: bottomRight,
        //   // Fill the path with a gradient of three color stops
        //   // that runs between the two points we defined earlier:
        //   fillColor: {
        //     gradient: {
        //       stops: ['yellow', 'red', 'blue']
        //     },
        //     origin: topLeft,
        //     destination: bottomRight
        //   }
        // });

      }
    };
  });