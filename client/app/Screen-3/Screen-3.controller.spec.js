'use strict';

describe('Controller: Screen3Ctrl', function () {

  // load the controller's module
  beforeEach(module('angularPrototypeApp'));

  var Screen3Ctrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Screen3Ctrl = $controller('Screen3Ctrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
