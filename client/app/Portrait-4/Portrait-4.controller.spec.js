'use strict';

describe('Controller: Portrait4Ctrl', function () {

  // load the controller's module
  beforeEach(module('angularPrototypeApp'));

  var Portrait4Ctrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Portrait4Ctrl = $controller('Portrait4Ctrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
