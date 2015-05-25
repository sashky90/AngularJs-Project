'use strict';

socialNetwork.directive('friendRequest', function () {
    return {
        restrict: 'A',
        templateUrl: 'templates/friendRequests.html',
        controller: 'friendRequestController'
    }
});