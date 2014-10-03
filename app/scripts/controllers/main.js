'use strict';

/**
 * @ngdoc function
 * @name firetestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firetestApp
 */
angular.module('firetestApp')
  .controller('MainCtrl', function ($scope) {

    $scope.CollapseDemoCtrl = function(){
      $scope.isCollapsed = true;
    };

  });
