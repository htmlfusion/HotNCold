'use strict';

describe('Directive: gradient', function () {

  // load the directive's module and view
  beforeEach(module('gishApp'));
  beforeEach(module('components/gameGraphics/gradient/gradient.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

});