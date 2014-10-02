'use strict';

describe('Controller: IngameCtrl', function () {

  // load the controller's module
  beforeEach(module('firetestApp'));

  var IngameCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IngameCtrl = $controller('IngameCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
