'use strict';

socialNetwork.controller('friendsPreviewController', function ($scope, $location, $routeParams, friendsService, authentication, notifyService) {
    var user = authentication.getUserData().username;

    $scope.userFriendsData = {};

    $scope.getUserFriendsPreview = function (username) {
        friendsService.getUserFriendsPreview(username).then(
            function success(userFriends) {
                $scope.userFriendsData.friendsCount = userFriends.data.totalCount;
                $scope.userFriendsData.friends = userFriends.data.friends;
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
            },
            function error(error) {
                notifyService.showError('Cannot proceed data request', error);
            }
        )
    };

    $scope.loadFriendsPreview = function(username) {
        if (username == user || $location.path().indexOf('/home') > -1) {
            $scope.getOwnFriendsPreview();
            $scope.userFriendsData.previewOwner = user;
        } else if($location.path().indexOf('/users/') > -1) {
            $scope.getUserFriendsPreview(username);
            $scope.userFriendsData.previewOwner = username;
        }
    };

    $scope.loadFriendsPreview($routeParams.username);
});