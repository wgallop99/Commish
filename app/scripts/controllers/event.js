'use strict';

/**
 * @ngdoc function
 * @name firetestApp.controller:EventCtrl
 * @description
 * # EventCtrl
 * Controller of the firetestApp
 */
angular.module('firetestApp')
  .controller('EventCtrl', function ($scope, fbutil) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    $scope.events = fbutil.syncArray('events', {limit: 10});

    $scope.addEvent = function(newEvent) {
        $scope.events.$add({
          type: newEvent.type,
          date: newEvent.date,
          location: newEvent.location
      });
    };
  });
