'use strict';

describe('Controller: Screen1Ctrl', function () {

  // load the controller's module
  beforeEach(module('angularPrototypeApp'));

  var Screen1Ctrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Screen1Ctrl = $controller('Screen1Ctrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
