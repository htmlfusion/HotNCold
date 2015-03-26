'use strict';

angular.module('angularPrototypeApp')
  .directive('threescene', function() {
    return {
      templateUrl: 'components/threescene/threescene.html',
      restrict: 'EA',
      link: function(scope, element, attrs) {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        element.append(renderer.domElement);
        
        var geometry = new THREE.BoxGeometry(400, 400, 1, 20, 20, 20);
        var material = new THREE.MeshLambertMaterial({
          color: 'white'
        });
        var cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        var sphere = new THREE.SphereGeometry( 0.5, 16, 8 );
        var redlight = new THREE.PointLight('red', 1, 400);
        //light.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0x80ff80 } ) ) );

        redlight.position.set(5, 50, 100);
        scene.add(redlight);

        var sphere = new THREE.SphereGeometry( 0.5, 16, 8 );
        var bluelight = new THREE.PointLight('blue', 1, 400);
        //light.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0x80ff80 } ) ) );

        bluelight.position.set(5, -50, 100);
        scene.add(bluelight);

        camera.position.z = 200;

      var render = function () {
        requestAnimationFrame( render );
        // redlight.position.y += .2;
        // redlight.position.x += .2;
        renderer.render(scene, camera);
      };

      render();


      }
    };
  });