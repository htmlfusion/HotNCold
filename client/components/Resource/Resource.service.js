'use strict';

angular.module('gishApp')
  .factory('Resource', ["$cachedResource",function ($cachedResource) {
    return function( url, params, methods ) {
      
    var defaults = {
        update: { method: 'PUT', isArray: false },
        create: { method: 'POST' },
        delete: { method: 'DELETE' },
      };
      
      var defaultParams = {id: '@_id'};
      methods = angular.extend( defaults, methods );
       
      params = angular.extend( defaultParams, params);
   
      var urlEnd = url.split('/').slice(2,url.length);
      var hardValues = urlEnd.filter(
        function(seg){
          return seg.indexOf(':')!==0;
        });
      var resourceName = hardValues.join('.')
      
      var resource = $cachedResource( resourceName, url, params, methods );
      
      resource.prototype.$save = function(params) {
        if ( !this._id ) {
          return this.$create(params).$promise;
        } else {
          return this.$update(params).$promise;
        }
      };
      
      return resource;
    };
  }]);
