'use strict';

describe('Controller: Grade9Ctrl', function () {

  // load the controller's module
  beforeEach(module('angularPrototypeApp'));

  var Grade9Ctrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Grade9Ctrl = $controller('Grade9Ctrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
