'use strict';

describe('Controller: Prize2Ctrl', function () {

  // load the controller's module
  beforeEach(module('angularPrototypeApp'));

  var Prize2Ctrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Prize2Ctrl = $controller('Prize2Ctrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
