'use strict';

describe('Directive: gradient', function () {

  // load the directive's module and view
  beforeEach(module('gishApp'));
  beforeEach(module('components/gameGraphics/gradient/gradient.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<gradient></gradient>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the gradient directive');
  }));
});