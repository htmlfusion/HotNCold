'use strict';

describe('Service: scene', function () {

  // load the service's module
  beforeEach(module('gishAppApp'));

  // instantiate service
  var scene;
  beforeEach(inject(function (_scene_) {
    scene = _scene_;
  }));

  it('should do something', function () {
    expect(!!scene).toBe(true);
  });

});
