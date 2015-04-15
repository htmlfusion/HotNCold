'use strict';

angular.module('gishApp')
  .factory('geoCache', function (Resource) {

    var resource = Resource('/api/geocache/:id');
    return resource;

  });
