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

    $scope.items = ['Sport','Basketball','Baseball', 'Football', 'Frisbee', 'Soccer', 'Other'];

    $scope.select = $scope.items[0];


    $scope.CollapseDemoCtrl = function(){
      $scope.isCollapsed = true;
    };

  });
