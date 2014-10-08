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

      console.log($rootScope.singleEvent);
    };

    $scope.signUp = function (user, key) {
      console.log(user);
      console.log($rootScope.singleEventId);

      var ref = fbutil.ref('events/' + $rootScope.singleEventId);
      var players = $rootScope.singleEvent.players;
      ref.child('players').push(user);
      Object.keys(players).forEach(function (player) {
        if(player === $rootScope.auth.user.email) {
          console.log(player);
          return console.log('you are already signed up!');
        }
      });
    };

    $scope.deletePlayer = function (user, key) {

      var ref = fbutil.ref('events/' + $rootScope.singleEventId);
      ref.child('players').child(key).remove();
      $scope.added = false;
    };

    $scope.CollapseDemoCtrl = function(){
      $scope.isCollapsed = true;
    };

}]);
