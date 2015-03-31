'use strict';

describe('Controller: GradientCtrl', function () {

  // load the controller's module
  beforeEach(module('gishAppApp'));

  var GradientCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GradientCtrl = $controller('GradientCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
