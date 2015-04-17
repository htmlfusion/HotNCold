'use strict';

angular.module('gishApp')
  .directive('gradient', function () {
    return {
      templateUrl: 'components/gameGraphics/gradient/gradient.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        var canvas = element.find('canvas');
        paper.setup(canvas[0]);
        // Create a Paper.js Path to draw a line into it:


        // Define two points which we will be using to construct
        // the path and to position the gradient color:
        var topLeft = [0, 0];
        var bottomRight = [360, 640];

        // // Create a rectangle shaped path between
        // // the topLeft and bottomRight points:
        var rect = new paper.Path.Rectangle({
            topLeft: topLeft,
            bottomRight: bottomRight,
            // Fill the path with a gradient of three color stops
            // that runs between the two points we defined earlier:
        });

        var path = new paper.Path();
        //path.strokeColor = 'white';
        path.add(new paper.Point(180, -200));
        path.add(new paper.Point(180, 700));
        path.pivot = new paper.Point(180,320)

        path.rotate(0);

        var intersections = path.getIntersections(rect);

        rect.fillColor = {
              gradient: {
                stops: [['#D71A1A', 0], ['#BC128B', .33], ['#630DA9', .66], ['#070076', 1]],
              },
              origin: intersections[0].point,
              destination: intersections[1].point 
          };

        paper.view.draw();
      }
    };
  });