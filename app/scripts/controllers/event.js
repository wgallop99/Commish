'use strict';


 angular.module('firetestApp')
  .controller('EventCtrl', ['$rootScope','$scope', 'fbutil','Firebase', '$log','$location',
    function ($rootScope, $scope, fbutil, Firebase, $log, $location) {


    $scope.events = fbutil.syncArray('events');

    $scope.addEvent = function(newEvent) {
        $scope.events.$add({
          icon: newEvent.icon,
          type: newEvent.type,
          date: newEvent.date,
          location: newEvent.location
      });
    };

    $scope.getEvent = function (type) {
      $rootScope.singleEvent = type;
      console.log($rootScope.singleEvent);
    };

}]);
