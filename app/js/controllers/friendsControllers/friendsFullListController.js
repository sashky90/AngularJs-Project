'use strict';

socialNetwork.controller('friendsFullListController', function ($scope, $location, $routeParams, userService, friendsService , authentication, notifyService) {
    var user = authentication.getUserData().username;

    $scope.getUserData = function(wallOwnerUsername) {
        userService.getUserFullData(wallOwnerUsername).then(
            function success(wallOwner) {
                $scope.wallOwner = wallOwner.data;

                if (wallOwner.data.isFriend) {
                    $scope.getUserFriends(wallOwner.data.username);
                } else if (wallOwner.data.username == user) {
                    $scope.getOwnFriends();
                } else {
                    $location.path('/users/' + wallOwner.data.username);
                    notifyService.showInfo("Cannot view non-friend friends.");
                }

                $scope.friendsViewOptionAvailable = true;
            },
            function error(error) {
                $location.path('/users/' + $scope.wallOwner);
                notifyService.showError("Error with data request.");
            });
    };

    $scope.getUserFriends = function(username) {
        friendsService.getUserFriends(username).then(
            function success(friends) {
                $scope.friends = friends.data;
            },
            function error(error) {
                $location.path('/users/' + $scope.wallOwner);
                notifyService.showError("Error with data request.");
            })
    };

    $scope.getOwnFriends = function() {
        friendsService.getOwnFriends().then(
            function success(friends) {
                $scope.friends = friends.data;
            },
            function error(error) {
                $location.path('/users/' + $scope.wallOwner);
                notifyService.showError("Error with data request.");
            })
    };

    $scope.getUserData($routeParams.username);
});