'use strict';


 angular.module('firetestApp')
  .controller('EventCtrl', ['$rootScope','$scope', 'fbutil','Firebase','$firebase', '$log','$location',
    function ($rootScope, $scope, fbutil, Firebase,$firebase, $log, $location) {

    $scope.oldEvent = new Date();

    $scope.events = fbutil.syncArray('events');

    $scope.addEvent = function(newEvent) {
        $scope.events.$add({
          icon: newEvent.icon,
          type: newEvent.type,
          date: newEvent.date,
          location: newEvent.location
      });
    };

    $scope.getEvent = function (key) {
      var ref = fbutil.ref('events/' + key);
      ref.once('value', function (data) {
        $rootScope.singleEvent = data.val();
      });
      // $rootScope.singleEvent = $firebase(ref);
      console.log($rootScope.singleEvent);
    };

    $scope.joinGame = function (name) {

    };

}]);
