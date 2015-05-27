'use strict';

socialNetwork.controller('userHeaderController', function($scope, $routeParams, authentication, userService, notifyService) {
    var user = authentication.getUserData().username;

    $scope.getUserData = function(wallOwnerUsername) {
        userService.getUserFullData(wallOwnerUsername).then(
            function success(wallOwnerProfile) {

                $scope.postOptionAvailable = wallOwnerProfile.data.isFriend ||
                wallOwnerProfile.data.username == user;

                $scope.friendsPreviewAvailable = $scope.postOptionAvailable;

                $scope.wallOwner = wallOwnerProfile.data;
            },
            function error(error) {
                notifyService.showError("Error with data request.", error);
            });
    };

    $scope.getUserData($routeParams.username);
});