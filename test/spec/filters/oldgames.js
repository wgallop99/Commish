'use strict';

describe('Filter: oldGames', function () {

  // load the filter's module
  beforeEach(module('firetestApp'));

  // initialize a new instance of the filter before each test
  var oldGames;
  beforeEach(inject(function ($filter) {
    oldGames = $filter('oldGames');
  }));

  it('should return the input prefixed with "oldGames filter:"', function () {
    var text = 'angularjs';
    expect(oldGames(text)).toBe('oldGames filter: ' + text);
  });

});
