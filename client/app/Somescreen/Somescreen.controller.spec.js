'use strict';

describe('Controller: SomescreenCtrl', function () {

  // load the controller's module
  beforeEach(module('angularPrototypeApp'));

  var SomescreenCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SomescreenCtrl = $controller('SomescreenCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
