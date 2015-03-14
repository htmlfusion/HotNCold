'use strict';

describe('Controller: Screen2Ctrl', function () {

  // load the controller's module
  beforeEach(module('angularPrototypeApp'));

  var Screen2Ctrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Screen2Ctrl = $controller('Screen2Ctrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
