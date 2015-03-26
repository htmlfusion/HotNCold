'use strict';

describe('Controller: SpinSmallCtrl', function () {

  // load the controller's module
  beforeEach(module('angularPrototypeApp'));

  var SpinSmallCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpinSmallCtrl = $controller('SpinSmallCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
