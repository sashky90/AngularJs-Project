'use strict';

socialNetwork.controller('UserHeaderController', function($scope, $routeParams, authentication, userService, notifyService) {
    var user = authentication.getUserData().username;

    $scope.getUserData = function(wallOwnerUsername) {
        userService.getUserFullData(wallOwnerUsername).then(
            function success(wallOwnerProfile) {

                $scope.postOptionAvailable = wallOwnerProfile.data.isFriend ||
                wallOwnerProfile.data.username == user;

                $scope.friendsPreviewAvailable = wallOwnerProfile.data.isFriend;

                $scope.wallOwner = wallOwnerProfile.data;
            },
            function error(error) {
                notifyService.showError("Error with data request.", error);
            });
    };

    $scope.getUserData($routeParams.username);
});