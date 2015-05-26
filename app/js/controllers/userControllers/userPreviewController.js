'use strict';

socialNetwork.controller('userPreviewController', function ($scope, userService, friendsService, notifyService) {
    $scope.getUserPreview = function (username) {
        userService.getUserPreviewData(username).then(
            function success(previewedUser) {
                $scope.canInviteUser = !previewedUser.data.isFriend && !previewedUser.data.hasPendingRequest;
                $scope.previewedUser = previewedUser.data;
                $scope.userPreviewShown = true;
            },
            function error(error) {
                notifyService.showError('Error with data request.', error);
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
                notifyService.showError('Error wit data request.', error);
            }
        )
    };

    $scope.hideUserPreview = function() {
        $scope.userPreviewShown = false;
    };
});