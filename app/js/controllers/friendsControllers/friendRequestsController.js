'use strict';

socialNetwork.controller('friendRequestController', function ($scope, friendsService, notifyService) {
    $scope.getFriendRequest = function () {
        friendsService.getFriendRequest().then(
            function success(friendRequests) {
                $scope.friendRequests = friendRequests.data;
                $scope.showRequests();
            },
            function error(error) {
                notifyService.showError('Error with data request');
            }
        )
    };

    $scope.showRequests = function () {
        $scope.requestsVisible = true;
    };

    $scope.hideRequests = function () {
        $scope.requestsVisible = false;
    };

    $scope.approveRequest = function (requestedId) {
        friendsService.approveFriendRequest(requestedId).then(
            function success(data) {
                notifyService.showInfo('Successfully approved friend request');
                $scope.getFriendRequest();
            },
            function error(error) {
                notifyService.showError('Unable to approve friend request.');
            }
        )
    };

    $scope.rejectRequest = function (requestedId) {
      friendsService.rejectFriendRequest(requestedId).then(
          function success(data) {
              notifyService.showInfo('Successfully rejected friend request.');
              $scope.getFriendRequest();
          },
          function error(error) {
              notifyService.showError('Unable to reject friend request.');
          }
      )
    };
});