'use strict';

angular.module('gishApp')
  .factory('GeoCache', function (Resource) {

    var resource = Resource('/api/geocache/:id');
    return resource;

  });
