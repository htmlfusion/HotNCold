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
        path.fillColor = 'white';
        path.add(new paper.Point(width/2, 0-height));
        path.add(new paper.Point(width/2, height*2));
        path.pivot = new paper.Point(width/2, height/2);

        // path.rotate(20);

        // var intersections = path.getIntersections(rect);

        // rect.fillColor = {
        //       gradient: {
        //         stops: [['#D71A1A', 0], ['#BC128B', .33], ['#630DA9', .66], ['#070076', 1]],
        //       },
        //       origin: intersections[0].point,
        //       destination: intersections[1].point 
        //   };

        paper.view.onFrame = function(event){

          path.rotate(scope.scene.bearing);
          var intersections = path.getIntersections(rect);
          rect.fillColor = {
                gradient: {
                  stops: [['#D71A1A', 0], ['#BC128B', .33], ['#630DA9', .66], ['#070076', 1]],
                },
                origin: intersections[0].point,
                destination: intersections[1].point 
            };


        };
        paper.view.draw();
      }
    };
  });