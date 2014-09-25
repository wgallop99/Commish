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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
