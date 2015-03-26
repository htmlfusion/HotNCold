'use strict';

describe('Controller: SpinCompleteCtrl', function () {

  // load the controller's module
  beforeEach(module('angularPrototypeApp'));

  var SpinCompleteCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpinCompleteCtrl = $controller('SpinCompleteCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
