'use strict';

describe('Controller: SpinStartCtrl', function () {

  // load the controller's module
  beforeEach(module('angularPrototypeApp'));

  var SpinStartCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpinStartCtrl = $controller('SpinStartCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
