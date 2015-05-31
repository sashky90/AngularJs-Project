'use strict';

socialNetwork.controller('userPreviewController', function ($scope, userService, friendsService, authentication, notifyService) {
    var user = authentication.getUserData().username;

    $scope.getUserPreview = function (username) {
        userService.getUserPreviewData(username).then(
            function success(previewedUser) {
                $scope.canInviteUser = !previewedUser.data.isFriend && !previewedUser.data.hasPendingRequest && previewedUser.data.username != user;
                $scope.previewedUser = previewedUser.data;
                $scope.userPreviewShown = true;
            },
            function error(error) {
                notifyService.showError('Error with data request');
            }
        )
    };

    $scope.sendFriendRequest = function (username) {
        friendsService.sendFriendRequest(username).then(
            function success() {
                notifyService.showInfo('Friend request successfully sent.');
                $scope.getUserPreview($scope.userUsername);
            },
            function error(error) {
                notifyService.showError('Friend request was not send.');
            }
        )
    };

    $scope.hideUserPreview = function() {
        $scope.userPreviewShown = false;
    };
});