'use strict';

socialNetwork.controller('loggedInUserHeaderController', function ($scope, $rootScope, profileService, notifyService) {
    $scope.getProfileData = function () {
    profileService.getOwnProfileData().then(
        function success(loggedUserProfile) {
            $rootScope.loggedUserProfile = loggedUserProfile.data;
        },
        function (error) {
            notifyService.showError('Error with data request')
        }
    )
    };

    $scope.getProfileData();
});