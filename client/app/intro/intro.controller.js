'use strict';

angular.module('gishAppApp')
  .controller('IntroCtrl', function ($scope, $timeout) {
    $scope.intros = [{
        /*caption: "Welcome"
      },{
        caption: "You're going to have to move your feet"
      },{
        caption: "The closer you get, the hotter you get"
      },{
        caption: "The further you get, the colder you get"
      },{
        caption: "Start moving!"
      },{
        caption: ""
      },{
        caption: {
          earned: "You've earned the",
          badge: "Explorer's Badge",
          src: "app/intro/explorer-badge.png",
          prize: "Found the prize",
          points: "9000+ points",
          replay: "Replay"   
      }*/
      
      
      
      
      
      
      caption: "Welcome"
      },{
        caption2: "You're going to have to move your feet"
      },{
        caption3: "The closer you get, the hotter you get"
      },{
        caption4: "The further you get, the colder you get"
      },{
        caption5: "Start moving!"
      },{
        caption6: ""
      },{
        caption7: {
          earned: "You've earned the",
          badge: "Explorer's Badge",
          src: "app/intro/explorer-badge.png",
          prize: "Found the prize",
          points: "9000+ points",
          replay: "Replay"   
      }
    }];
    
    
    $scope.user = {name: ''};
  });
  

