'use strict';

describe('Service: geoCache', function () {

  // load the service's module
  beforeEach(module('gishApp'));

  // instantiate service
  var geoCache;
  beforeEach(inject(function (_geoCache_) {
    geoCache = _geoCache_;
  }));

  it('should do something', function () {
    expect(!!geoCache).toBe(true);
  });

});
