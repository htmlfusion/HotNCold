'use strict';

describe('Controller: EnvCtrl', function () {

  // load the controller's module
  beforeEach(module('angularPrototypeApp'));

  var EnvCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EnvCtrl = $controller('EnvCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
