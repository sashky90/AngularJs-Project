'use strict';

socialNetwork.controller('friendRequestController', function ($scope, friendsService, notifyService) {
    $scope.getFriendRequest = function () {
        friendsService.getFriendRequest().then(
            function success(friendRequests) {
                $scope.friendRequests = friendRequests.data;
                $scope.requestsVisible = true;
            },
            function error(error) {
                notifyService.showError('Error with data request', error)
            }
        )
    };

    $scope.approveRequest = function (requestedId) {
        friendsService.approveFriendRequest(requestedId).then(
            function success(data) {
                notifyService.showInfo('Successfully approved friend request')
            },
            function error(error) {
                notifyService.showError('Unable to approve friend request.', error)
            }
        )
    };

    $scope.rejectRequest = function (requestedId) {
      friendsService.rejectFriendRequest(requestedId).then(
          function success(data) {
              notifyService.showInfo('Successfully rejected friend request.')
          },
          function error(error) {
              notifyService.showError('Unable to reject friend request.', error)
          }
      )
    };
});