'use strict';

socialNetwork.controller('editProfileController', function ($scope, $location, profileService, notifyService) {

    $scope.getProfileData = function() {
        profileService.getOwnProfileData().then(
            function success(profile) {
                $scope.editedData = profile.data;
            },
            function error(error) {
                notifyService.showError('Error with data request', error);
            });
    };

    $scope.getProfileData();

    $scope.editOwnProfile = function (editData) {
        profileService.editOwnProfileData(editData).then(
            function success(data) {
                notifyService.showInfo('Profile successfully edited');
                $scope.getProfileData();
                $location.path('/home');
            },
            function error(error) {
                notifyService.showError('Error with data request.', error)
            }
        )
    }
});