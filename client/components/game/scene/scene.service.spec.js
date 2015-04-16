'use strict';

describe('Service: scene', function () {

  // load the service's module
  beforeEach(module('gishApp'));

  // instantiate service
  var Scene;
  beforeEach(inject(function (_Scene_) {
    Scene = _Scene_;
  }));

  it('should do something', function () {
    expect(!!Scene).toBe(true);
  });

  it('should create a random GeoCache', function () {
    var location = {latitude:34.024054, longitude: -118.394609};
    var scene = new Scene();
    var distance = 100;
    var geoCache = scene.createRandomCache(location, distance);
    var distance = geolib.getDistance(location, geoCache.location);
    expect(distance).toBe(100);
  });

});
