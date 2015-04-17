'use strict';

describe('Service: deviceOrientation', function () {

  // load the service's module
  beforeEach(module('gishApp'));

  // instantiate service
  var deviceOrientation;
  beforeEach(inject(function (_deviceOrientation_) {
    deviceOrientation = _deviceOrientation_;
  }));

  it('should do something', function () {
    expect(!!deviceOrientation).toBe(true);
  });

});
