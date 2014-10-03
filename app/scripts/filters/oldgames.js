'use strict';

/**
 * @ngdoc filter
 * @name firetestApp.filter:oldGames
 * @function
 * @description
 * # oldGames
 * Filter in the firetestApp.
 */

angular.module('firetestApp')
  .filter('oldGames', function () {
  return function (events) {
    if (events && events.length) {
      var filtered = [];
      var cutOffDate = moment().startOf('day').subtract(1, 'millisecond');
      for (var i = 0; i < events.length; i++) {
        var evt = events[i];
        if (cutOffDate.isBefore(evt.date)) {
          filtered.push(evt);
        }
      }
      return filtered;
    } else {
      return events;
    }
  };
});
