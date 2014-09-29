'use strict';

/**
 * @ngdoc function
 * @name firetestApp.controller:EventCtrl
 * @description
 * # EventCtrl
 * Controller of the firetestApp
 */
 //
 //

 // angular.module('firetestApp')
 //  .controller('EventCtrl', ['$scope', 'eventsSvc', 'usersSvc',
 //    function ($scope, eventsSvc, usersSvc) {
 //            $scope.awesomeThings = [
 //              'HTML5 Boilerplate',
 //              'AngularJS',
 //              'Karma'
 //            ];
 // $scope.newEvent = { Type: '', date: '', location: ''};
 // $scope.currentEvent = null;
 // $scope.currentUser = null;
 // $scope.events = null;
 //
 // $scope.users = usersSvc.getUsers();
 //
 // $scope.$watch('currentUser', function () {
 //     usersSvc.setCurrentUser($scope.currentUser);
 //
 //     if ($scope.currentUser) {
 //         $scope.events = usersSvc.getItemsForCurrentUser();
 //     }
 // });
 //
 // $scope.addEvent = function () {
 //     eventsSvc.addEvent(angular.copy($scope.newEvent));
 //     $scope.newEvent = { type: '', date: '', location: ''};
 // };

 angular.module('firetestApp')
  .controller('EventCtrl', ['$scope', 'fbutil',
    function ($scope, fbutil) {
            $scope.awesomeThings = [
              'HTML5 Boilerplate',
              'AngularJS',
              'Karma'
            ];

    $scope.events = fbutil.syncArray('events');

    $scope.addEvent = function(newEvent) {
        $scope.events.$add({
          icon: newEvent.icon,
          type: newEvent.type,
          date: newEvent.date,
          location: newEvent.location
      });

  };
}]);
