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

    $scope.editOwnProfile = function(editedData) {
        if (editedData.profileImageData) {
            editedData.profileImageData = $scope.formatImageString(editedData.profileImageData.base64) ||
            $scope.editedData.profileImageData;
        }

        if (editedData.coverImageData) {
            editedData.coverImageData = $scope.formatImageString(editedData.coverImageData.base64) ||
            $scope.editedData.coverImageData;
        }

        profileService.editOwnProfileData(editedData).then(
            function success(result) {
                notifyService.showInfo("Successfully edited profile information.");
                $scope.getProfileData();
                $location.path('/home');
            },
            function error(error) {
                notifyService.showError("Error while editing profile information.");
            });
    };


    $scope.editPassword = function () {
        profileService.editPassword($scope.editedPassword).then(
            function success(data) {
                notifyService.showInfo('Password successfully changed.');
                $location.path('/home');
            },
            function error(error) {
                notifyService.showError('Error with data request', error);
            }
        )
    }
});