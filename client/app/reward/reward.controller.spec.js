'use strict';

describe('Controller: RewardCtrl', function () {

  // load the controller's module
  beforeEach(module('gishAppApp'));

  var RewardCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RewardCtrl = $controller('RewardCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
