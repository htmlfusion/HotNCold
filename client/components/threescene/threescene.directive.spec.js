'use strict';

describe('Directive: threescene', function () {

  // load the directive's module and view
  beforeEach(module('angularPrototypeApp'));
  beforeEach(module('components/threescene/threescene.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<threescene></threescene>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the threescene directive');
  }));
});