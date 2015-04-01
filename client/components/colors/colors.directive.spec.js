'use strict';

describe('Directive: colors', function () {

  // load the directive's module and view
  beforeEach(module('gishAppApp'));
  beforeEach(module('components/colors/colors.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<colors></colors>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the colors directive');
  }));
});