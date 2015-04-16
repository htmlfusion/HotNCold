'use strict';

angular.module('gishApp')
  .factory('GeoCache', function (Resource) {

    var resource = Resource('/api/geocaches/:id');
    return resource;

  });
