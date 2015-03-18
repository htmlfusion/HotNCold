'use strict';

describe('Controller: PackageStartCtrl', function () {

  // load the controller's module
  beforeEach(module('angularPrototypeApp'));

  var PackageStartCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PackageStartCtrl = $controller('PackageStartCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
