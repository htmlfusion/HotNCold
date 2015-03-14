'use strict';

describe('Controller: Grade7Ctrl', function () {

  // load the controller's module
  beforeEach(module('angularPrototypeApp'));

  var Grade7Ctrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Grade7Ctrl = $controller('Grade7Ctrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
