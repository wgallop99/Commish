'use strict';

describe('Filter: userGames', function () {

  // load the filter's module
  beforeEach(module('firetestApp'));

  // initialize a new instance of the filter before each test
  var userGames;
  beforeEach(inject(function ($filter) {
    userGames = $filter('userGames');
  }));

  it('should return the input prefixed with "userGames filter:"', function () {
    var text = 'angularjs';
    expect(userGames(text)).toBe('userGames filter: ' + text);
  });

});
