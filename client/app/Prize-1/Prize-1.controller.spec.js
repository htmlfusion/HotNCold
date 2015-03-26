'use strict';

describe('Controller: Prize1Ctrl', function () {

  // load the controller's module
  beforeEach(module('angularPrototypeApp'));

  var Prize1Ctrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Prize1Ctrl = $controller('Prize1Ctrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
