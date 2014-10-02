'use strict';

/**
 * @ngdoc function
 * @name firetestApp.controller:IngameCtrl
 * @description
 * # IngameCtrl
 * Controller of the firetestApp
 */
angular.module('firetestApp')
  .controller('IngameCtrl', function ($scope) {
    $scope.timerRunning = true;

    $scope.startTimer = function (){
        $scope.$broadcast('timer-start');
        $scope.timerRunning = true;
    };

    $scope.stopTimer = function (){
        $scope.$broadcast('timer-stop');
        $scope.timerRunning = false;
    };

    $scope.resume = function (){
        $scope.$broadcast('timer-resume');
        $scope.timerRunning = true;
    };


    $scope.$on('timer-stopped', function (event, data){
        console.log('Timer Stopped - data = ', data);
    });

  });
