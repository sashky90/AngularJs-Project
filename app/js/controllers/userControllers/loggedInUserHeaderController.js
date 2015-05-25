'use strict';

socialNetwork.controller('loggedInUserHeaderController', function ($scope, profileService, notifyService) {
    profileService.getOwnProfileData().then(
        function success(loggedUserProfile) {
            $scope.loggedUserProfile = loggedUserProfile.data;
        },
        function (error) {
            notifyService.showError('Error with data request', error)
        }
    )
});