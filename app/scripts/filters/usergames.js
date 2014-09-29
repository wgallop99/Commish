'use strict';

/**
 * @ngdoc filter
 * @name firetestApp.filter:userGames
 * @function
 * @description
 * # userGames
 * Filter in the firetestApp.
 */
angular.module('firetestApp')
  .filter('userGames', function () {
    return function (events) {
      var filteredList = [];
      for (var i = 0; i < events.length; i++) {
        if(profile.name === event.name){
          filteredList.push(events[i]);
        }
      }
      return filteredList;
    };
  });
