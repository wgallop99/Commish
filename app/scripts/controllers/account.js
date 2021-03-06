'use strict';
/**
 * @ngdoc function
 * @name muck2App.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Provides rudimentary account management functions.
 */
angular.module('firetestApp')

  .controller('AccountCtrl',
    function ($scope, $rootScope, user, simpleLogin, fbutil, $timeout) {

    $scope.events = fbutil.syncArray('events');

    $scope.addEvent = function(newEvent) {
        $scope.events.$add({
          name: $scope.profile.name,
          icon: newEvent.icon,
          type: newEvent.type,
          date: newEvent.date,
          time: newEvent.time,
          location: newEvent.location,
          players: {
            value: $scope.profile.email
          }
      });

    };

    $scope.getEvent = function (key) {
      var ref = fbutil.ref('events/' + key);
      ref.once('value', function (data) {
        $rootScope.singleEvent = data.val();
      });
      console.log($rootScope.singleEvent);
    };

    $scope.updateEvent = function (key, data) {
      var ref = fbutil.ref('events/' + key);
      ref.$save(data);
    };

    $scope.user = user;
    $scope.logout = simpleLogin.logout;
    $scope.messages = [];
    loadProfile(user);

    $scope.changePassword = function(oldPass, newPass, confirm) {
      $scope.err = null;
      if( !oldPass || !newPass ) {
        error('Please enter all fields');
      }
      else if( newPass !== confirm ) {
        error('Passwords do not match');
      }
      else {
        simpleLogin.changePassword(user.email, oldPass, newPass)
          .then(function() {
            success('Password changed');
          }, error);
      }
    };

    $scope.changeEmail = function(pass, newEmail) {
      $scope.err = null;
      simpleLogin.changeEmail(pass, newEmail)
        .then(function(user) {
          loadProfile(user);
          success('Email changed');
        })
        .catch(error);
    };

    function error(err) {
      alert(err, 'danger');
    }

    function success(msg) {
      alert(msg, 'success');
    }

    function alert(msg, type) {
      var obj = {text: msg, type: type};
      $scope.messages.unshift(obj);
      $timeout(function() {
        $scope.messages.splice($scope.messages.indexOf(obj), 1);
      }, 10000);
    }

    function loadProfile(user) {
      if( $scope.profile ) {
        $scope.profile.$destroy();
      }
      fbutil.syncObject('users/'+user.uid).$bindTo($scope, 'profile');
    }

    $scope.CollapseDemoCtrl = function(){
      $scope.isCollapsed = true;
    };

});
