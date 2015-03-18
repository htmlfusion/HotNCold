'use strict';

describe('Controller: PackageLandCtrl', function () {

  // load the controller's module
  beforeEach(module('angularPrototypeApp'));

  var PackageLandCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PackageLandCtrl = $controller('PackageLandCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
