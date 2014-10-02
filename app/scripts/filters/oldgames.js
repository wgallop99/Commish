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
      var filteredList = [];
      for (var i = 0; i < events.length; i++) {
        var current = new Date().getTime();
        var lastModified = new Date(events[i].date).getTime();
        if (current <= lastModified) {
          filteredList.push(events[i]);
        }
      }
      return filteredList;
    };
  });
