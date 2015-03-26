'use strict';

describe('Controller: SpinMediumCtrl', function () {

  // load the controller's module
  beforeEach(module('angularPrototypeApp'));

  var SpinMediumCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpinMediumCtrl = $controller('SpinMediumCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
