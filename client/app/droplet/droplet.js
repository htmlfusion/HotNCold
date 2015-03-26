'use strict';

angular.module('angularPrototypeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('droplet', {
        url: '/droplet',
        templateUrl: 'app/droplet/droplet.html',
        controller: 'DropletCtrl'
      });
  });