'use strict';

describe('Service: geoCache', function () {

  // load the service's module
  beforeEach(module('gishApp'));

  // instantiate service
  var GeoCache;
  beforeEach(inject(function (_GeoCache_) {
    GeoCache = _GeoCache_;
  }));

  it('should do something', function () {
    expect(!!GeoCache).toBe(true);
  });

});
