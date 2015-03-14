'use strict';

describe('Controller: Grade8Ctrl', function () {

  // load the controller's module
  beforeEach(module('angularPrototypeApp'));

  var Grade8Ctrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Grade8Ctrl = $controller('Grade8Ctrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
