'use strict';


 angular.module('firetestApp')
  .controller('EventCtrl', ['$rootScope','$scope', 'fbutil',
    function ($rootScope, $scope, fbutil) {

    $scope.combine = function(date,time) {
      if (date && time) {
        return date + ' ' + time;
        } else {
          return '';
        }
    };

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
      $rootScope.singleEventId = key;
      ref.on('value', function (data) {
        $rootScope.singleEvent = data.val();

      });
      // $rootScope.singleEvent = $firebase(ref);
      console.log($rootScope.singleEvent);
    };

    // $scope.players = fbutil.ref('events/' + $rootScope.singleEventId).syncArray('players');
    $scope.added = true;

    $scope.signUp = function (user, key) {
      console.log(user);
      console.log($rootScope.singleEventId);
      $scope.added = false;
      var ref = fbutil.ref('events/' + $rootScope.singleEventId);
      ref.child('players').push(user);

    };

    $scope.deletePlayer = function (user, key) {
      console.log(key);
      $scope.added = true;
      var ref = fbutil.ref('events/' + $rootScope.singleEventId);
      ref.child('players').child(key).remove();
    };

    $scope.CollapseDemoCtrl = function(){
      $scope.isCollapsed = true;
    };

}]);
