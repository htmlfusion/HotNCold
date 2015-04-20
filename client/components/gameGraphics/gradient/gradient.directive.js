'use strict';

angular.module('gishApp')
  .directive('gradient', function () {
    return {
      templateUrl: 'components/gameGraphics/gradient/gradient.html',
      restrict: 'EA',
      scope: {
        scene: '='
      },
      link: function (scope, element, attrs) {

        var width = element.prop('offsetWidth');
        var height = element.prop('offsetHeight');

        var canvas = element.find('canvas');
        canvas.prop('width', width);
        canvas.prop('height', height);

        paper.setup(canvas[0]);
        // Create a Paper.js Path to draw a line into it:


        var topLeft = [0, 0];
        var bottomRight = [width, height];

        var rect = new paper.Path.Rectangle({
            topLeft: topLeft,
            bottomRight: bottomRight,
        });

        var path = new paper.Path();
        // For testing gradient from-to point calculation
        // path.strokeColor = 'white';
        path.add(new paper.Point(width/2, 0-height));
        path.add(new paper.Point(width/2, height*2));
        path.pivot = new paper.Point(width/2, height/2);

        paper.view.onFrame = function(event){

          path.setRotation(scope.scene.bearing-180);

          var intersections = path.getIntersections(rect);

          //For teting different gradient looks;
          //scope.scene.remaining = 10;

          var incr = (scope.scene.remaining / 3)/100.0;
           
          rect.fillColor = {
                gradient: {
                  stops: [
                    ['#D71A1A', 1], ['#D71A1A', Math.min(1, incr*3)], ['#BC128B', incr*2], 
                    ['#630DA9', incr], ['#070076', 0]
                  ],
                },
                origin: intersections[0].point,
                destination: intersections[1].point 
            };

        };
        paper.view.draw();
      }
    };
  });