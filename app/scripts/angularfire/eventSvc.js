// (function() {
//   'use strict';
// angular.module('mainSvc', ['firebase', 'firebase.utils', 'firebase.config'])
//   .factory('usersSvc', function($firebaseSimpleLogin, fbutil, $q, $rootScope) {
//     var usersRef = new Firebase(FIREBASE_URI + 'users');
//     var users = $firebase(usersRef);
//     var currentUser = null;
//
//     var getUsers = function () {
//         return users;
//     };
//
//     var getCurrentUser = function () {
//         return currentUser;
//     };
//
//     var setCurrentUser = function (user) {
//         currentUser = user;
//     };
//
//     var getEventsForCurrentUser = function () {
//         return users.$child(currentUser + '/events/');
//     };
//
//     var addEventForCurrentUser = function (eventRef) {
//         var child = users.$child(currentUser + '/events/' + itemRef.name());
//         child.$set(true);
//     };
//
//     var removeItemForCurrentUser = function (eventId) {
//         users.$remove(currentUser + '/events/' + itemId);
//     };
//
//     return {
//         getUsers: getUsers,
//         getCurrentUser: getCurrentUser,
//         setCurrentUser: setCurrentUser,
//         getItemsForCurrentUser: getItemsForCurrentUser,
//         addItemForCurrentUser: addItemForCurrentUser,
//         removeItemForCurrentUser: removeItemForCurrentUser
//     }
//     .factory('eventsSvc', function($firebaseSimpleLogin, fbutil, $q, $rootScope) {
//         var eventsRef = new Firebase(FIREBASE_URI + 'events');
//         var events = $firebase(eventsRef);
//
//         var getEvents = function () {
//             return events;
//         };
//
//         var addEvent = function (event) {
//             events.$add(event).then(function(ref){
//                 UsersService.addEventForCurrentUser(ref);
//             })
//         };
//
//         var removeEvent = function (eventId) {
//             events.$remove(eventId).then(function(){
//                UsersService.removeEventForCurrentUser(eventId);
//             });
//         };
//
//         return {
//             getEvents: getEvents,
//             addEvent: addEvent,
//             removeEvent: removeEvent
//         }
//   });
// })();
