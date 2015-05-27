'use strict';

socialNetwork.controller('friendsPreviewController', function ($scope, $location, $routeParams, friendsService, authentication, notifyService) {
    var user = authentication.getUserData().username;

    $scope.userFriendsData = {};

    $scope.getUserFriendsPreview = function (username) {
        friendsService.getUserFriendsPreview(username).then(
            function success(userFriends) {
                $scope.userFriendsData.friendsCount = userFriends.data.totalCount;
                $scope.userFriendsData.friends = userFriends.data.friends;
                $scope.userFriendsData.previewOwner = $routeParams.username;
            },
            function error(error) {
                notifyService.showError('Cannot proceed data request', error);
            }
        )
    };

    $scope.getOwnFriendsPreview = function () {
        friendsService.getOwnFriendsPreview().then(
            function success(ownFriendsPreview) {
                $scope.userFriendsData.friendsCount = ownFriendsPreview.data.totalCount;
                $scope.userFriendsData.friends = ownFriendsPreview.data.friends;
                $scope.userFriendsData.previewOwner = user;
            },
            function error(error) {
                notifyService.showError('Cannot proceed data request', error);
            }
        )
    };

    $scope.loadFriendsPreview = function(username) {
        if ($location.path().indexOf('/users/') > -1) {
            if (username == user) {
                $scope.getOwnFriendsPreview();
            } else {
                $scope.getUserFriendsPreview(username);
            }
        } else if ($location.path().indexOf('/home') > -1) {
            $scope.getOwnFriendsPreview();
        }
    };

    $scope.loadFriendsPreview($routeParams.username);
});