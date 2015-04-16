'use strict';

describe('Controller: MissionCtrl', function () {

  // load the controller's module
  beforeEach(module('gishApp'));

  var MissionCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MissionCtrl = $controller('MissionCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
